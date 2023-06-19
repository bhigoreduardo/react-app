import { products } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import CompareCard from "../components/CompareCard";

const Compare = () => {
  return (
    <>
      <Breadcrumb title="Compare produtos" />
      <Container className="py-5">
        <div className="row">
          {products?.length > 0 &&
            products.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6 col-12">
                <CompareCard {...item} />
              </div>
            ))
          }
        </div>
      </Container>
    </>
  );
};

export default Compare;
