import React from "react";
import CarouselEffect from '../../Components/Carousael/CarouselEffect'
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import Layout from "../../Layout/Layout";

function Landing() {
  return (
    <Layout>
      <CarouselEffect/>
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
