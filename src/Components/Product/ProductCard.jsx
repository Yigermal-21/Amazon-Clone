import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Currencyformat.jsx/Currencyformat";
import Classes from "./Product.module.css";

function ProductCard({ Product }) {
  const { image, title, id, price, rating } = Product;

  return (
    <div className={Classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={Classes.rating}>
          {/* {ratings} */}
          <Rating value={rating.rate} precision={0.1} />
          {/* {count} */}
          <small>{rating.count}</small>
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
