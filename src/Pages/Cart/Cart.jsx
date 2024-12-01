import React, { useContext } from "react";
import Calsses from "./Cart.module.css";
import Layout from "../../Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/Currencyformat.jsx/Currencyformat";
import {Link} from 'react-router-dom'

function Cart() {
  // const context = useContext(DataContext);
  // console.log("DataContext:", context);
  const {state,dispatch} = useContext(DataContext);
  const {basket,user}= state;
  
  const total = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
  // console.log("Basket:", basket);
  // console.log("User:", user);
  return (
    <Layout>
      <section className ={Calsses.container}>
        <div className ={Calsses.cart_container}>
          <h2>Hello </h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
          </div>
          {basket?.length !== 0 && (
            <div className={Calsses.subtotal}>
              <div>
                <p>SubtotalSubtotal ({basket.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />"
                <small>This Order contains a gift</small>
              </span>
              <Link to="/payments">Continue to checkout</Link>
            </div>
          )}
        
      </section>
    </Layout>
  );
}

export default Cart;
