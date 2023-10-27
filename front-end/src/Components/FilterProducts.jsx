import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormFilter from "./FormFilter";
// import FormFilter from './FormFilter';
import SingleProduct from "./SingleProduct";
import "../styles/FilterProducts.scss";

function FilterProducts({
  products,
  isDiscountPage,
  setFilteredProducts,
  // filteredProducts
  status,
  // priceFrom,
  // priceTo,
  // showDiscount,
  // sortType,
  // setPriceFrom,
  // setPriceTo,
  // setShowDiscount,
  // setSortType,
}) {
  // const products = useSelector((state) => state.products.products);
  // const products = useSelector((state) => state.products.status);
  // const [filteredProducts, setFilteredProducts] = useState(products);
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
      console.log("fi", filtered);
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
        
        console.log("filter", filtered);
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortType === "desc") {
        filtered.sort((a, b) => b.price - a.price);
      }
      setFilteredProducts(filtered);
    };
    handleFilter();
  }, [priceFrom, priceTo, showDiscount, sortType]);

  // if (status === "fulfilled") {
  // setFilteredProducts(products);
  return (
    <div>
      {/* <FormFilter
        isDiscountPage
        setPriceFrom={setPriceFrom}
        setPriceTo={setPriceTo}
        setFilteredProducts={setFilteredProducts}
        setShowDiscount={setShowDiscount}
        setSortType={setSortType}
        priceFrom={priceFrom}
        priceTo={priceTo}
        showDiscount={showDiscount}
        sortType={sortType}
      /> */}

      <div className="filtration">
        <span className="filtration__title-price">Price</span>
        <input
          className="filtration__from-to"
          type="number"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          placeholder="From"
        />
        <input
          className="filtration__from-to"
          type="number"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          placeholder="To"
        />
        {!isDiscountPage && (
          <>
            <label className="filtration__title">
              Discounted Items
              <input
                className="filtration__checkbox"
                type="checkbox"
                checked={showDiscount}
                onChange={(e) => setShowDiscount(e.target.checked)}
              />
            </label>
          </>
        )}
        <label className="filtration__title">
          Sorted
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Выберите</option>
            <option value="asc">По Возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </label>
      </div>

      {/* <div> 
        {filteredProducts.map((product) => (
           <SingleProduct key={product.id} product={product}/>
       
          ))}
       </div> */}
    </div>
  );
  // }
}

export default FilterProducts;
