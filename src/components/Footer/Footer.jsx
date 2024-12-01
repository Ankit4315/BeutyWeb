import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import Logo from "../../assets/images/reenee.svg";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <img className="Footerimg" src={Logo} alt="Renée Logo" />
        <p>
          Timelessly inspired, endlessly enhanced- RENÉE Cosmetics is an Indian
          makeup brand that's redefining beauty with its range of high quality,
          cruelty-free and FDA-approved innovative range of products.
        </p>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <XIcon />
        </div>
      </div>

      <div className="content">
        <div className="box1">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
          </ul>
        </div>
        <div className="box1">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
            <li>
              <a href="#">Lips</a>
            </li>
            <li>
              <a href="#">Face</a>
            </li>
          </ul>
        </div>
        <div className="box1">
          <h3>Contact Us</h3>
          <p>+91 98251 19878</p>
          <p>hi@reneecosmetics.in</p>
          <p>Mon-Sat from 11 am to 7 pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
