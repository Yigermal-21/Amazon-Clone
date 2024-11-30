import React, { useEffect, useState } from "react";
// import Classes from "./ProductDetail.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { producturl } from "../../Api/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";


function ProductDetail() {
const {productid} = useParams()
const[product,setproduct] = useState({})
const [isLoading, setIsLoading] = useState(true);
// console.log(productid);
useEffect(() => {
  setIsLoading(true);
  axios
    .get(`${producturl}/products/${productid}`)
    .then((res) => {
      setproduct(res.data);
      setIsLoading(false);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
}, []);
    // productid;

 return (
  <Layout>
    {isLoading ? (
      <Loader />
    ) : (
      <ProductCard product={product} flex={true} renderDesc ={true}/>
    )}
  </Layout>
);
}

export default ProductDetail;
