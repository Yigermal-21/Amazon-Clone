import Classes from "./Category.module.css";
import React from 'react'
import{Link} from 'react-router-dom'

function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={Classes.category}>
      <Link to = {`/category/${data.category}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.image} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
