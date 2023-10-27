// import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../../Filter";
import FilterProducts from "../../FilterProducts";
import SingleProduct from "../../SingleProduct";

import "../../../styles/AllCat.scss";


function ProductsWithSalePage() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  let saleProducts = products.filter((product) => product.discont_price);
  const [filteredProducts, setFilteredProducts] = useState(saleProducts);

  // const [priceFrom, setPriceFrom] = useState("");
  // const [priceTo, setPriceTo] = useState("");
  // const [showDiscount, setShowDiscount] = useState(false);
  // const [sortType, setSortType] = useState("");

  // useEffect(() => {
  // if (status === "fulfilled") {
  //   setFilteredProducts(saleProducts);
  // }
  // }, [status]);

  if (status === "fulfilled") {
    return (
      <div>
        <h1 className="category__title">Products with sale</h1>

        {/* First option */}
        {/* <Filter products={saleProducts} isDiscountPage={true} status={status} /> */}

        {/* Second option */}
        <FilterProducts
          products={saleProducts}
          isDiscountPage={true}
          setFilteredProducts={setFilteredProducts}
          status={status}
          // filteredProducts={filteredProducts}
          // setPriceFrom={setPriceFrom}
          // setPriceTo={setPriceTo}
          // setShowDiscount={setShowDiscount}
          // setSortType={setSortType}
          // priceFrom={priceFrom}
          // priceTo={priceTo}
          // showDiscount={showDiscount}
          // sortType={sortType}
        />
        <div className="products__container">
          {filteredProducts.map((product) => (
            <div className="product_items" key={product.id}>
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsWithSalePage;
