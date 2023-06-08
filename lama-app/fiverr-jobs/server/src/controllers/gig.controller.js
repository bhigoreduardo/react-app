import Gig from "../models/gig.model.js";
import exception from "../utils/exception.js";

export const create = async (req, res, next) => {
  try {
    if (!req.isSeller) return next(exception(403, "User not authorizated"));

    const gig = await Gig.create({
      userId: req.userId,
      ...req.body,
    });
    return res.status(201).json(gig);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    if (!req.isSeller) return next(exception(403, "User not authorizated"));
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(exception(404, "Not found"));
    if (gig.userId.toString() !== req.userId)
      return next(exception(403, "User not authorizated"));

    await Gig.findByIdAndRemove(req.params.id);
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const findById = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(exception(404, "Not found"));

    return res.status(200).json(gig);
  } catch (error) {
    next(error);
  }
};

export const findAll = async (req, res, next) => {
  const query = req.query;
  const filter = {
    ...(query.userId && { userId: query.userId }),
    ...(query.category && {
      category: { $regex: query.category, $options: "i" },
    }),
    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gt: query.min }),
        ...(query.max && { $lt: query.max }),
      },
    }),
    ...(query.search && {
      $or: [
        { title: { $regex: query.search, $options: "i" } },
        { shortTitle: { $regex: query.search, $options: "i" } },
        { description: { $regex: query.search, $options: "i" } },
        { shortDescription: { $regex: query.search, $options: "i" } },
      ],
    }),
  };

  try {
    const gigs = await Gig.find(filter).sort({ [query.sort]: -1 });
    return res.status(200).json(gigs);
  } catch (error) {
    next(error);
  }
};
