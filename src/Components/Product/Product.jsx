import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Classes from "./Product.module.css";

function Product() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={Classes.product_container}>
      {Products.map((singleProduct) => {
        return <ProductCard Product={singleProduct} key={singleProduct.id} />;
      })}
    </section>
  );
}

export default Product;
