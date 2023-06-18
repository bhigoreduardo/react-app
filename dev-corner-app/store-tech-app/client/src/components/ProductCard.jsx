/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ title, cover, thumbnail, brand, grid, description, price, stars }) => {
  return (
    <div className="product-card position-relative">
      <div className="wishlist-icon position-absolute">
        <button className="border-0 bg-transparent">
          <img src="/icons/wish.svg" alt="Favorito" />
        </button>
      </div>

      <Link to="/" className="product-image">
        <img src={cover} className="img-fluid" alt={title} />
        <img src={thumbnail} className="img-fluid" alt={title} />
      </Link>

      <div className="product-details">
        <h6 className="brand">{brand}</h6>
        <h5 className="product-title">
          {title}
        </h5>
        <ReactStars count={5} size={24} value={stars} edit={false} activeColor="#ffd700" />
        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
          {description}
        </p>
        <p className="price">{price}</p>
      </div>

      <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
          <button className="border-0 bg-transparent">
            <img src="/icons/product-compare.svg" alt="Comparar" />
          </button>
          <button className="border-0 bg-transparent">
            <img src="/icons/view.svg" alt="Visualizar" />
          </button>
          <button className="border-0 bg-transparent">
            <img src="/icons/add-cart.svg" alt="Adicionar ao carrinho" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
