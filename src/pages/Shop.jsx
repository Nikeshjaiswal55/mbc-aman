import React from "react";
import "./shop.css"; // For styling

const Shop = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-top">
          <div className="logo">MBCUniversal | Shop</div>
          <div className="links">
            <a href="/">Titles</a>
            <a href="/">Products</a>
            <a href="/">Trending</a>
            <a href="/">New Arrivals</a>
            <a href="/">Holiday</a>
            <a href="/">Wicked</a>
          </div>
          <div className="navbar-search-cart">
            <button className="search-btn">Search</button>
            <button className="cart-btn">Cart</button>
          </div>
        </div>
        <div className="deal-banner">
          <p>
            DEAL OF THE DAY: Take <b>20% off Funkos</b> with Code{" "}
            <b>DEAL1</b> at Checkout - <b>TODAY ONLY!</b>
          </p>
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        <div className="deal-info">
          <h1>DEAL OF THE DAY!</h1>
          <p>
            Take <b>20% off Funkos</b> with Code <b>DEAL1</b> - Today Only!
          </p>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
        <div className="funko-image">
          <img
            src="https://via.placeholder.com/300x300" // Replace with actual image
            alt="Funko Deal"
          />
        </div>
      </div>

      {/* Date Selector */}
      <div className="dates">
        <div className="date-item active">MON <br /> 18</div>
        <div className="date-item">TUE <br /> 19</div>
        <div className="date-item">WED <br /> 20</div>
        <div className="date-item">THURS <br /> 21</div>
        <div className="date-item">FRI <br /> 22</div>
      </div>
    </div>
  );
};

export default Shop;
