import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../Currencyformat.jsx/Currencyformat";
import Classes from "./Product.module.css";
import {Link} from 'react-router-dom'
import { DataContext } from "../DataProvider/DataProvider";
import {Type} from '../../Utility/Actiontype'


function ProductCard({ product, flex, renderDesc,renderAdd }) {

  const { image, title, id, price, rating,description} = product;

  const{state, dispatch} =useContext(DataContext)
// console.log(state);

  const addToCart =() =>{
    const item = { image, title, id, price, rating, description };
    dispatch({
    type:Type.ADD_TO_BASKET,
    item,
    // item:{
    //   image, title, id, price, rating,description
    // };
    });
    // console.log(item)
  }
  

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
        {renderAdd && (
          <button className={Classes.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
