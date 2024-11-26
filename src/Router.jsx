import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Signup from './Pages/Auth/Signup'
import Payments from './Pages/Payment/Payments'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Orders" element={<Orders/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default Routing