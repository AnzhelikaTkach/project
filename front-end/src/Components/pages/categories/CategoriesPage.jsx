import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../../../App.scss";
import "../../../styles/AllCat.scss";

function CategoriesPage() {
  const categories = useSelector((state) => state.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);
  console.log("all", categories);

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

export default CategoriesPage;
