import { useContext, useEffect } from "react";

import { Context } from "src/context/ContextProvider";
import { fetchDataFromApi } from "src/libs/api";
import Banner from "src/components/Home/Banner";
import Categories from "src/components/Home/Categories";
import Products from "src/components/Common/Products";
import "./Home.style.scss";

function Home() {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  const getCategories = async () => {
    fetchDataFromApi("/api/categories?populate=image").then((res) =>
      setCategories(res?.data)
    );
  };
  const getProducts = async () => {
    fetchDataFromApi("/api/products?populate=image").then((res) =>
      setProducts(res?.data)
    );
  };
  useEffect(() => {
    getCategories();
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="home">
      <Banner />
      <Categories categories={categories} />
      <Products title="Popular Products" products={products} />
    </section>
  );
}

export default Home;
