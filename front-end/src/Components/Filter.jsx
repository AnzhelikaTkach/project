import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import "../styles/FilterProducts.scss"
import "../styles/ViewAllProducts.scss";
import FormFilter from "./FormFilter";

function Filter({ products, isDiscountPage, status }) {
  // const products = useSelector((state) => state.products.products);
  // const products = useSelector((state) => state.products.status);
  const [discountPage,setDiscountPage] = useState(isDiscountPage)
  const [filteredProducts, setFilteredProducts] = useState(products);
  // console.log("products", products);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscount, setShowDiscount] = useState(false);
  const [sortType, setSortType] = useState("");
  // useEffect(() => {
  //   if (status === "fulfilled") {
  //     setFilteredProducts(products);
  //   }
  // }, [status]);

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

  return (
    <>
      <div>
      <FormFilter
        discountPage={discountPage}
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
            <SingleProduct  product={product} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
export default Filter;
