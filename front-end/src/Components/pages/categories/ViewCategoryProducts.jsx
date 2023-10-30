import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../../../styles/AllCat.scss";

import { getCategoryProducts } from "../../../store/slices/categoriesSlice";
// import ProductsContainer from "../../Components/ProductsContainer";
import SingleProduct from "../../SingleProduct";
import FilterProducts from "../../FilterProducts";

import NotFoundPage from "../not-found/NotFoundPage";
import Filter from "../../Filter";

function ViewCategoryProducts() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryKey } = useParams();
  const categoryProducts = useSelector(
    (state) => state.categories.categoryProducts.data
  );
  const catTitle = useSelector(
    (state) => state.categories.categoryProducts.category
  );
  const categoryProductsStatus = useSelector(
    (state) => state.categories.categoryProductsStatus
  );

  // const [filteredProducts, setFilteredProducts] = useState(categoryProducts);

  console.log("cat", catTitle);
  console.log("selectedCategory", categoryProducts);
  // console.log("filter", filteredProducts);

  //   const [priceFrom, setPriceFrom] = useState("");
  // const [priceTo, setPriceTo] = useState("");
  // const [showDiscount, setShowDiscount] = useState(false);
  // const [sortType, setSortType] = useState("");

  // useEffect(() => {
  // if (categoryProductsStatus === "fulfilled") {
  //   setFilteredProducts(categoryProducts);
  // }
  // }, [categoryProductsStatus]);

  useEffect(() => {
    dispatch(getCategoryProducts(categoryKey));
  }, [categoryKey, dispatch]);

  if (categoryProductsStatus === "loading") {
    return <NotFoundPage />;
  }

  if (categoryProductsStatus === "fulfilled") {
    return (
      // <div onClick={() => navigate(`/categoties/${id}`)}>
      <div>
        <h2 className="category__title">{catTitle.title}</h2>

        {/* First option */}
        <Filter
          products={categoryProducts}
          isDiscountPage={false}
          status={categoryProductsStatus}
        />

        {/* Second option */}
        {/* <FilterProducts
          // products={categoryProducts}
          // isDiscountPage={false}
          // setFilteredProducts={setFilteredProducts}

          // status={categoryProductsStatus}
          // setPriceFrom={setPriceFrom}
          // setPriceTo={setPriceTo}
          // setShowDiscount={setShowDiscount}
          // setSortType={setSortType}
          // priceFrom={priceFrom}
          // priceTo={priceTo}
          // showDiscount={showDiscount}
          // sortType={sortType} 
        /> */}
        {/* <div className="products__container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product_items">
              <SingleProduct product={product} />
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default ViewCategoryProducts;
