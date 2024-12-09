import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from "./Pages/Auth/Auth";
import Payments from './Pages/Payment/Payments'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QSxYRDWwU2r60GsSxvPBdri6dLYCgqJm2keHQe0jumwgrZsN7GagNnAmH27uX8NK4omEN6NdDOlxm2v39UZY5Af00IOOQuYoU"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/Payments"
          element={
            <Elements stripe={stripePromise}>
              <Payments />
             </Elements>
          }
        />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productid" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;