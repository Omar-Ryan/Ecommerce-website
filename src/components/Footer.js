import React from "react";
import "./footer.css";
import {
  FaHeadphonesAlt,
  FaPiggyBank,
  FaShippingFast,
  FaWallet,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon-box">
                <FaPiggyBank />
              </div>
              <div className="details">
                <h3>Great Saving</h3>
                <p>lorem ipsum dolor site amat,</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FaShippingFast />
              </div>
              <div className="details">
                <h3>Free Delivery</h3>
                <p>lorem ipsum dolor site amat,</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FaHeadphonesAlt />
              </div>
              <div className="details">
                <h3>24X7 Support</h3>
                <p>lorem ipsum dolor site amat,</p>
              </div>
            </div>
            <div className="box">
              <div className="icon-box">
                <FaWallet />
              </div>
              <div className="details">
                <h3>Money Back</h3>
                <p>lorem ipsum dolor site amat,</p>
              </div>
            </div>
          </div>
          <div className="right-box">
          <div className="header">
            <h3>Logo</h3>
            <p>Lorem ipsum, dolor sit amat, qui quasi quam Et culpa quae ut  provident cum sed.</p>
          </div>
          <div className="bottom">
          <div className="box">
            <h3>your account</h3>
            <ul>
                <li>About us</li>
                <li>Account</li>
                <li>Payment</li>
                <li>Sales</li>
            </ul>
          </div>
          <div className="box">
            <h3>products</h3>
            <ul>
                <li>Delivery</li>
                <li>Track Order</li>
                <li>New product</li>
                <li>Old product</li>
            </ul>
          </div>
          <div className="box">
            <h3>contact us</h3>
            <ul>
                <li>4005, Silver Business</li>
                <li>+(096)010666666</li>
                <li>info@gmail.com</li>
            </ul>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
