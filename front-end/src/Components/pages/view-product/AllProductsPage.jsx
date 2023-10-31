import { useSelector } from "react-redux";

import "../../../styles/AllCat.scss";
import "../../../styles/Products.scss";
import "../../../styles/ViewAllProducts.scss";
import Filter from "../../Filter";

function AllProductsPage() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  console.log(products);

  if (status === "fulfilled") {
    return (
      <div>
        <h1 className="category__title">All Products</h1>
        <Filter products={products} isDiscountPage={false} status={status} />
      </div>
    );
  }
}

export default AllProductsPage;
