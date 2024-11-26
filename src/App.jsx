import React from 'react'
import "./index.css";
import Header from "./Components/Header/Header";
import CarouselEffect from './Components/Carousael/CarouselEffect';
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";



function App() {

  return (
    <>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default App
