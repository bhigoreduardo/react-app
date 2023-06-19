import { products } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  return (
    <>
      <Breadcrumb title="Favoritos" />
      <Container className="py-5">
        <div className="row">
          {products?.length > 0 &&
            products.map((item, i) => (
            <div key={i} className="col-3">
              <WishlistCard {...item} />
            </div>
            ))
          }
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
