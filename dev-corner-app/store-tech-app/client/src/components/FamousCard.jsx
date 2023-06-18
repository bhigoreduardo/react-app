/* eslint-disable react/prop-types */
const FamousCard = ({ image, title, details, price }) => {
  return (
    <div className="famous-card position-relative">
      <img src={image} className="img-fluid" alt={title} />
      <div className="famous-content position-absolute">
        <h5>{title}</h5>
        <h6>{details}</h6>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default FamousCard;
