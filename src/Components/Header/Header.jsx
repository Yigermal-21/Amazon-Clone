import React from "react";
import classes from "./header.module.css";
import {Link}from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import Lowerheader from "./Lowerheader";

function Header() {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.Logo_container}>
          {/* {Logo} */}
          <Link to ="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          {/* Delivery */}

          <div className={classes.delivery}>
            <p style={{ display: "flex", alignItems: "center" }}>
              <FaLocationPin style={{ marginRight: "8px" }} />
              Delivered to
            </p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div className={classes.search}>
          {/* serachbar */}
          <select name="" id="" className="name">
            <option value="" className="value">
              All
            </option>
          </select>
          <input type="text" name="" id="" placeholder="Search Product" />
          {<FaSearch />}
        </div>
        {/* othersection */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_7U1SDrs-cCQsOEZY3fH1tZcjoIVuQDKJg&s"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          {/* threecomponents */}
          <Link to="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link >
          {/* orders */}
          <Link to="/Orders">
            <p>returns</p>
            <span>&Orders</span>
          </Link>
          <Link to ="/Cart" className={classes.cart}>
            {<BiCart size={35} />}
            <span>0</span>
          </Link>
        </div>
      </section>
      <Lowerheader />
    </>
  );
}

export default Header;

// function Header() {
//   return (
//     <>
//       <section className={classes.header_container}>
//         <div className={classes.Logo_container}>
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//               alt="Amazon Logo"
//             />
//           </Link>
//           {/* Delivery */}
//           <div className={classes.delivery}>
//             <p style={{ display: "flex", alignItems: "center" }}>
//               <FaLocationPin style={{ marginRight: "8px" }} />
//               Delivered to
//             </p>
//             <span>Ethiopia</span>
//           </div>
//         </div>

//         <div className={classes.search}>
//           {/* Searchbar */}
//           <select className={classes.dropdown}>
//             <option value="all">All</option>
//           </select>
//           <input type="text" placeholder="Search Product" />
//           <FaSearch />
//         </div>

//         {/* Other Section */}
//         <div className={classes.order_container}>
//           <Link to="/" className={classes.language}>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_7U1SDrs-cCQsOEZY3fH1tZcjoIVuQDKJg&s"
//               alt="Language Selector"
//             />
//             <select>
//               <option value="EN">EN</option>
//             </select>
//           </Link>

//           {/* Account & Orders */}
//           <Link to="/account">
//             <p>Sign In</p>
//             <span>Account & Lists</span>
//           </Link>

//           {/* Orders */}
//           <Link to="/orders">
//             <p>Returns</p>
//             <span>& Orders</span>
//           </Link>

//           {/* Cart */}
//           <Link to="/cart" className={classes.cart}>
//             <BiCart size={35} />
//             <span>0</span>
//           </Link>
//         </div>
//       </section>

//       {/* Lowerheader */}
//       <Lowerheader />
//     </>
//   );
// }

// export default Header;