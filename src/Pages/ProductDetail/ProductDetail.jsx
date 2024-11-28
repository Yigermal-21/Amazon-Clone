import React, { useEffect, useState } from "react";
// import Classes from "./ProductDetail.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { producturl } from "../../Api/endpoints";
import ProductCard from "../../Components/Product/ProductCard";


function ProductDetail() {
const {productid} = useParams()
const[product,setproduct] = useState({})
// console.log(productid);
useEffect(() => {
  axios
    .get(`${producturl}/products/${productid}`)
    .then((res) => {
      setproduct(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [productid]);

  return (
    <Layout>
    <ProductCard 
    product ={product}
    />
    
    </Layout>
  ); 
}

export default ProductDetail;
