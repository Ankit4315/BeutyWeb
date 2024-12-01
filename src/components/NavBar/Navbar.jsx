import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [isCategoriesHoverd, setIsCategoriesHoverd] = useState(true);

  return (
    <div className="global">
      <div className="subnav">🎁FREE Product on Orders above ₹899🎁</div>
      <header>
        <div className="menueicon">
          <MenuIcon />
        </div>
        <div className="logo">
          <img
            src="https://www.reneecosmetics.in/cdn/shop/files/Group_1000003538_125x.svg?v=1702452647"
            alt=""
          />
        </div>
        <div className="subheadding">
          <ul className="middletext">
            <li>All Products</li>
            <li
              onMouseEnter={() => setIsCategoriesHoverd(true)}
              // onMouseLeave={() => setIsCategoriesHoverd(false)}
            >
              Categories
              {isCategoriesHoverd && (
                <div
                  className="categories-dropdown"
                  // onMouseEnter={() => setIsCategoriesHoverd(true)}
                  // onMouseLeave={() => setIsCategoriesHoverd(true)}
                >
                  <div className="categories-item">
                    <img
                      src="https://www.reneecosmetics.in/cdn/shop/files/WhatsApp_Image_2024-02-20_at_3.22.10_PM_4.jpg?v=1708422965"
                      alt=""
                    />
                    <p>THOSE EYES</p>
                  </div>
                  <div className="categories-item">
                    <img
                      src="https://www.reneecosmetics.in/cdn/shop/files/WhatsApp_Image_2024-02-20_at_3.22.10_PM_4.jpg?v=1708422965"
                      alt=""
                    />
                    <p>THOSE EYES</p>
                  </div>
                  <div className="categories-item">
                    <img
                      src="https://www.reneecosmetics.in/cdn/shop/files/WhatsApp_Image_2024-02-20_at_3.22.10_PM_4.jpg?v=1708422965"
                      alt=""
                    />
                    <p>THOSE EYES</p>
                  </div>
                  <div className="categories-item">
                    <img
                      src="https://www.reneecosmetics.in/cdn/shop/files/WhatsApp_Image_2024-02-20_at_3.22.10_PM_4.jpg?v=1708422965"
                      alt=""
                    />
                    <p>THOSE EYES</p>
                  </div>
                  <div className="categories-item">
                    <img
                      src="https://www.reneecosmetics.in/cdn/shop/files/WhatsApp_Image_2024-02-20_at_3.22.10_PM_4.jpg?v=1708422965"
                      alt=""
                    />
                    <p>THOSE EYES</p>
                  </div>
                  <div className="categories-item">
                    <img
                      src="https://www.reneecosmetics.in/cdn/shop/files/WhatsApp_Image_2024-02-20_at_3.22.10_PM_4.jpg?v=1708422965"
                      alt=""
                    />
                    <p>THOSE EYES</p>
                  </div>
                </div>
              )}
            </li>
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
