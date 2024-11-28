import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="main1">
          <div className="about">
            <img
              className="img"
              src="https://www.reneecosmetics.in/cdn/shop/files/Group_1000003538_200x.svg?v=1702452647"
              alt=""
            />

            <p>
              Timelessly inspired, endlessly enhanced- RENÉE Cosmetics is an
              Indian makeup brand that's redefining beauty with its range of
              high quality, cruelty-free and FDA-approved innovative range of
              products. RENÉE believes in empowering women to own and enjoy
              their bold, ambitious persona and let their glam do the talking.
            </p>
          </div>
          <div className="icon">
            <FacebookIcon className="fb" />
          </div>
        </div>
        <div className="content">
          <div className="box1">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="">All Products</a>
              </li>
              <li>
                <a href="">Lips</a>
              </li>
              <li>
                <a href="">Face</a>{" "}
              </li>
              <li>
                <a href="">Eyes</a>
              </li>

              <li>
                <a href="">Fragnances</a>
              </li>
              <li>
                <a href="">Nails</a>
              </li>
              <li>
                <a href="">Skin</a>
              </li>
              <li>
                {" "}
                <a href="">Gifting</a>
              </li>
              <li>
                <a href="">Combos</a>
              </li>
              <li>
                {" "}
                <a href="">Tools & Accessories</a>
              </li>
              <li>
                {" "}
                <a href="">Princess By RENÉE</a>
              </li>
            </ul>
          </div>
          <div className="box1">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Track Order</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Who We Are</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Return & Refund Policy</a>
              </li>
              <li>
                <a href="">Shipping Policy</a>
              </li>
              <li>
                <a href="">Fraud Prevention</a>
              </li>
              <li>
                <a href="">T&C for the ₹5Lakh</a>
              </li>
              <li>
                <a href="">Contest</a>
              </li>
            </ul>
          </div>

          <div className="box1">
            <ul>
              <h3>Contact Us</h3>
              <li>
                <p>+91 98251 19878</p>
              </li>
              <li>
                <p>hi@reneecosmetics.in</p>
              </li>
              <li>
                <p>Mon-Sat from 11 am to 7 pm</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
