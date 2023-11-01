import React, { useEffect, useState } from "react";

import SingleProduct from "./SingleProduct";
import "../styles/FilterProducts.scss";
import "../styles/ViewAllProducts.scss";
import FormFilter from "./FormFilter";
import Loader from "./Loader";

function Filter({ products, isDiscountPage, status }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscount, setShowDiscount] = useState(false);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const handleFilter = () => {
      let filtered = products;

      if (priceFrom) {
        filtered = filtered.filter(
          (product) => product.price >= Number(priceFrom)
        );
      }

      if (priceTo) {
        filtered = filtered.filter(
          (product) => product.price <= Number(priceTo)
        );
      }

      if (showDiscount) {
        filtered = filtered.filter((product) => product.discont_price);
      }

      if (sortType === "asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortType === "desc") {
        filtered.sort((a, b) => b.price - a.price);
      }
      setFilteredProducts(filtered);
    };
    handleFilter();
  }, [priceFrom, priceTo, showDiscount, sortType]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <div>
        <FormFilter
          discountPage={isDiscountPage}
          setPriceFrom={setPriceFrom}
          setPriceTo={setPriceTo}
          setFilteredProducts={setFilteredProducts}
          setShowDiscount={setShowDiscount}
          setSortType={setSortType}
          priceFrom={priceFrom}
          priceTo={priceTo}
          showDiscount={showDiscount}
          sortType={sortType}
        />

        <div className="products__container">
          {filteredProducts.map((product) => (
            <div className="product_items" key={product.id}>
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Filter;
