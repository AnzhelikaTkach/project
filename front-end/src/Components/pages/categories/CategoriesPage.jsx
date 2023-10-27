import React, { useEffect } from "react";
import "../../../App.scss";
import "../../../styles/AllCat.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllCategories,
  getCategoryProducts,
} from "../../../store/slices/categoriesSlice";

function CategoriesPage() {
  // const dispatch = useDispatch();
  // const { category } = useParams();
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

  // console.log(products);

  return (
    <div className="category ">
      <h2 className="category__title">Categories</h2>

      <div
        className="category-container"
        // style={{
        //
        // }}
      >
        {categories.categories.map((category) => (
          // <ViewCategoryProducts key={category.id} {...category}/>
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
// {categories.categories.map((category) => (
//   // <ViewCategoryProducts key={category.id} {...category}/>
//   <div key={category.id} >

//       <img
//       onClick={() => navigate(`/categoties/${category.id}`)}
//         src={`http://localhost:3333/${category.image}`}
//         alt="category image"
//       />
//       <p>{category.title}</p>

//   </div>
// ))}
//   <section className={styles.section}>
//   <h2>{title}</h2>

//   <div className={styles.list}>
//     {list.map(({ id, title, image }) => (
//       <Link to={`/categories/${id}`} key={id} className={styles.item}>
//         <div
//           className={styles.image}
//           style={{ backgroundImage: `http://localhost:3333/category_img/(${image})` }}
//         />
//         <h3 className={styles.title}>{title}</h3>
//       </Link>
//     ))}
//   </div>
// </section>

export default CategoriesPage;
