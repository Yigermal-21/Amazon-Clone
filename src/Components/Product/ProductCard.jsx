import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Currencyformat.jsx/Currencyformat";
import Classes from "./Product.module.css";
import {Link} from 'react-router-dom'

function ProductCard({ product, flex, renderDesc }) {

  const { image, title, id, price, rating,description} = product;
  

  return (
    <div
      className={`${Classes.card_container} ${
        flex ? Classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={Classes.rating}>
          {/* {ratings} */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* {count} */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={Classes.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
