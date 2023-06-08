/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./GigCard.style.scss";

function GigCard({ item }) {
  return (
    <Link to={`/gigs/${item.id}`} className="link">
      <div className="gigCard">
        <img src={item.image} alt={item.username} />

        <div className="info">
          <div className="user">
            <img src={item.profile} alt={item.username} />
            <span>{item.username}</span>
          </div>
          <p>{item.description}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>

        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="Heart" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GigCard;
