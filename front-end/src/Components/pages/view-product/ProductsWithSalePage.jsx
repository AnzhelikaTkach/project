import { useSelector } from "react-redux";

import Filter from "../../Filter";
import "../../../styles/AllCat.scss";

function ProductsWithSalePage() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  let saleProducts = products.filter((product) => product.discont_price);

  if (status === "fulfilled") {
    return (
      <div>
        <h1 className="category__title">Products with sale</h1>
        <Filter products={saleProducts} isDiscountPage={true} status={status} />
      </div>
    );
  }
}

export default ProductsWithSalePage;
