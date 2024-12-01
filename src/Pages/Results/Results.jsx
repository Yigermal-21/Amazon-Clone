import React, { useEffect, useState } from "react";
import Classes from "./Results.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import {producturl} from '../../Api/endpoints'
import ProductCard from "../../Components/Product/ProductCard";
import Loader from '../../Components/Loader/Loader'

function Results() {
  const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();
  

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]); 

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category: /{categoryName}</p>
        <hr />
        {isLoading ? <Loader /> :(<div className={Classes.products_container}>
          {results?.map((Product) => (
            
            <ProductCard
              key={Product.id}
              product={Product}
              renderAdd={true}
            />
          ))}
        </div>)
        }
        
      </section>
    </Layout>
  );
}

export default Results;
