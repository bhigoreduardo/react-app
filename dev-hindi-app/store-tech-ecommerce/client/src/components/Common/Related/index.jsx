/* eslint-disable react/prop-types */
import useFetch from "src/hooks/useFetch";
import Products from "src/components/Common/Products";

function Related({ productId, categoriId }) {
  const data = useFetch(
    `/api/products?populate=image&filters[id][$ne]=${productId}&filters[category][id]=${categoriId}&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <section className="related">
      <Products title="Related" products={data} />
    </section>
  );
}

export default Related;
