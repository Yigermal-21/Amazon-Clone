import React, { useEffect, useState } from "react";
import Classes from "./Results.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import {producturl} from '../../Api/endpoints'
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  

  useEffect(() => {
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]); 

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: /{categoryName}</p>
        <hr />
        <div className={Classes.products_container}>
          {results?.map((Product) => (
            
            <ProductCard
              key={Product.id}
              product={Product} // Passing product as a prop to ProductCard
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
