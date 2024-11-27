import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="global">
      <div className="subnav">🎁FREE Product on Orders above ₹899🎁</div>
      <header>
        <div className="menueicon">
          <MenuIcon />
        </div>
        <div className="logo">
          <img src="https://www.reneecosmetics.in/cdn/shop/files/Group_1000003538_125x.svg?v=1702452647" alt="" />
        </div>
        <div className="subheadding">
          <ul className="middletext">
            <li>All Products</li>
            <li>Categories</li>
            <li>Hot sellers</li>
            <li>Everyday</li>
            <li>RENÉE PRO</li>
            <li>Princess by RENÉE</li>
          </ul>
        </div>
        <div className="search">
          <SearchIcon />
        </div>
        <div className="person">
          <PersonOutlineIcon />
        </div>
        <div className="cart">
          <LocalMallIcon />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
