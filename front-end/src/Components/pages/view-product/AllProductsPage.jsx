import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "../../../styles/AllCat.scss";
import "../../../styles/Products.scss";
import "../../../styles/ViewAllProducts.scss";
import Filter from "../../Filter";
import Loader from "../../Loader";

function AllProductsPage() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  console.log(products);

  if (!products) {
    return <Navigate to="*" />;
  }
  
  if (status === "loading") {
    return <Loader />;
  }

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
