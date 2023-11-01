import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../../App.scss";
import "../../../styles/AllCat.scss";
import Loader from "../../Loader";

function CategoriesPage() {
  const categories = useSelector((state) => state.categories);
  const status = useSelector((state) => state.categories.status);
  console.log("all", categories);

  if (!categories) {
    return <Navigate to="*" />;
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "fulfilled") {
    return (
      <div className="category ">
        <h2 className="category__title">Categories</h2>
        <div className="category-container">
          {categories.categories.map((category) => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              <div className="categories">
                <img
                  src={`http://localhost:3333/${category.image}`}
                  alt="category image"
                  className="categories__img"
                />
                <p className="categories__title">{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoriesPage;
