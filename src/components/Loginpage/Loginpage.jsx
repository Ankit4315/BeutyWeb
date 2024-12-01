import React from "react";
import "./login.css";
import AppleIcon from "@mui/icons-material/Apple";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Login = () => {
  return (
    <div className="main">
      <div className="background-image">
        <img
          className="renee-logo"
          src="https://www.reneecosmetics.in/cdn/shop/files/renee-logo-white.svg?v=1704885102&width=186"
          alt="Renee Logo"
        />
      </div>
      <div className="card">
        <h3>Log in</h3>
        <form>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            id="phone-number"
            type="tel"
            placeholder="123 456 7890"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            required
          />
          <button type="submit" className="btn">
            Send OTP
          </button>
        </form>
        <div className="divider">Or Continue With</div>
        <div className="icon-container">
          <div className="icon-option">
            <AppleIcon className="icon" />
            <p>Log in using Email</p>
          </div>
          <div className="icon-option">
            <WhatsAppIcon className="icon" />
            <p>Log in using WhatsApp</p>
          </div>
        </div>
      </div>
      <div className="terms">
        <label className="checkbox-container">
          <input type="checkbox" required />
          By continuing, you agree that you have read and accept our{" "}
          <a href="#">T & C</a>.
        </label>
      </div>
      <div className="extra-links">
        <a href="#" className="guest-link">
          Continue as a guest
        </a>
        <a href="#" className="help-link">
          Need help?
        </a>
      </div>
    </div>
  );
};

export default Login;
