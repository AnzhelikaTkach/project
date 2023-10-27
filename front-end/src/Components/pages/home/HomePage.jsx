import React from "react";
import { useSelector } from "react-redux";
import "../../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import Discount from "../../Discount";
import "../../../styles/Categories.scss";
import "../../../styles/ViewAllProducts.scss";
import HeroSection from "../../HeroSection";

// import ViewAllProducts from "../view-product/ViewAllProducts";
import ProductsWithSalePage from "../view-product/ProductsWithSalePage";
import SingleProduct from "../../SingleProduct";

function HomePage() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);
  console.log("all", categories);
  const products = useSelector((state) => state.products.products);

  let saleProducts = products
    .filter((product) => product.discont_price)
    .slice(0, 3);

  if (status === "loading") {
    return (
      <img
        src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif"
        alt="loading"
      />
    );
  }

  if (status === "rejected") {
    return <h1>{error}</h1>;
  }

  // const { categories, products } = useSelector((state) => state);
  // console.log(categories)
  return (
    <div>
      <HeroSection />
      {/* <Categories products={categories} amount={4} title="Catalog"/> */}
      {/* <ViewAllProducts products={products} amount={4} title="Sale"/> */}
      <div>
        <div className="catalog">
          <h2 className="catalog__title">Catalog</h2>

          <button
            onClick={() => navigate(`/categories/all`)}
            className="catalog__button"
          >
            All categories
          </button>
        </div>
        <div className="category-container">
          {categories.categories.slice(0, 4).map((category) => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              <div  className="categories">
                <img
                  className="categories__img"
                  src={`http://localhost:3333/${category.image}`}
                  alt="category_image"
                />
                <p className="categories__title">{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Discount />
      <div>
        <h2 className="sale__title">Sale</h2>
        <div className="products__container">
          {saleProducts.map((product) => (
            <div className="product_items" key={product.id}>
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
