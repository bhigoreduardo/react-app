import User from "../models/user.model.js";

export const findById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...userPublic } = user._doc;
    return res.status(200).json(userPublic);
  } catch (error) {
    next(error);
  }
};
