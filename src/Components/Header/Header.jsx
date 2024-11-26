import React from "react";
import classes from "./header.module.css";
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
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
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
          <a href="" className={classes.language}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_7U1SDrs-cCQsOEZY3fH1tZcjoIVuQDKJg&s"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          {/* threecomponents */}
          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>&Orders</span>
          </a>
          <a href="" className={classes.cart}>
            {<BiCart size={35} />}
            <span>0</span>
          </a>
        </div>
      </section>
      <Lowerheader />
    </>
  );
}

export default Header;
