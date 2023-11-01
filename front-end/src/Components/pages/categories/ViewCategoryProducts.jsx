import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../../../styles/AllCat.scss";
import { getCategoryProducts } from "../../../store/slices/categoriesSlice";
import Filter from "../../Filter";
import Loader from "../../Loader";
import NotFoundPage from "../not-found/NotFoundPage";

function ViewCategoryProducts() {
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

  console.log("cat", catTitle);
  console.log("selectedCategory", categoryProducts);

  useEffect(() => {
    dispatch(getCategoryProducts(categoryKey));
  }, [categoryKey, dispatch]);

  if (categoryProductsStatus === "loading") {
    return <Loader />;
  }

  if (categoryProductsStatus === "fulfilled") {
    return (
      <div>
        <h2 className="category__title">{catTitle.title}</h2>
        {!categoryProducts ? (
          <NotFoundPage />
        ) : (
          <Filter
            products={categoryProducts}
            isDiscountPage={false}
            status={categoryProductsStatus}
          />
        )}
      </div>
    );
  }
}

export default ViewCategoryProducts;
