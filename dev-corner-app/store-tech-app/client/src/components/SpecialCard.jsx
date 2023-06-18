/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialCard = ({ cover, title, brand, stars, offer, price, countdown, stock }) => {
  return (
    <div className="special-product-card d-sm-flex d-block justify-content-between">
      <div>
        <img src={cover} className="img-fluid" alt={title} />
      </div>
      <div className="special-product-content">
        <h5 className="brand">{brand}</h5>
        <h6 className="title">{title}</h6>
        <ReactStars count={5} size={24} value={stars} edit={false} activeColor="#ffd700" />
        <p className="price"><span className="red-p">{offer}</span> &nbsp; <strike>{price}</strike></p>
        <div className="discount-till d-flex align-items-center gap-10">
          <p className="mb-0">
            <b>{countdown}&nbsp;</b>horas
          </p>
          <div className="d-flex gap-10 align-items-center">
            <span className="badge rounded-circle p-3 bg-danger">1</span>:
            <span className="badge rounded-circle p-3 bg-danger">1</span>:
            <span className="badge rounded-circle p-3 bg-danger">1</span>
          </div>
        </div>
        <div className="prod-count my-3">
          <p>Unids restantes: {stock}</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <Link className="button">Addiconar ao carrinho</Link>
      </div>
    </div>
  );
};

export default SpecialCard;
