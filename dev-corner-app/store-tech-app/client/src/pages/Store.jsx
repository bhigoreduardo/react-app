import { useState } from "react";

import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import FilterCard from "../components/FilterCard";
import FilterSort from "../components/FilterSort";
import { products } from "../utils/data";
import ProductCard from "../components/ProductCard";

const Store = () => {
  const [productGrid, setProductGrid] = useState(3);

  return (
    <>
      <Breadcrumb title="Loja" />
      <Container className="py-5">
        <div className="row">
          <div className="col-md-3 col-4 d-md-block d-none">
            <FilterCard />
          </div>

          <div className="col-md-9 col-sm-12">
            <FilterSort setProductGrid={setProductGrid} />

            <div className="d-flex flex-wrap">
              {products.map((item, i) => (
                <div key={i} className={`col-lg-${productGrid} col-md-4 col-sm-6 col-12`}>
                  <ProductCard {...item} grid={productGrid} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Store;
