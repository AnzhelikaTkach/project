import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "../../../App.scss";
import Discount from "../../Discount";
import "../../../styles/AllCat.scss";
import HeroSection from "../../HeroSection";
import SingleProduct from "../../SingleProduct";
import Loader from "../../Loader";

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
    return <Loader />;
  }

  if (status === "rejected") {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <HeroSection />

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
              <div className="categories">
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
