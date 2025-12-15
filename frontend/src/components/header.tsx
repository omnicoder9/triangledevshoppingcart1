import React from "react";
import "../assets/styles/headerstyles.css";
import logo from "../assets/images/bird.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Micheal ijil</h3>
      </div>

      <div className="header-center-right">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Custom Designs</a>
            </li>

            <li className="hover-container">
              <div className="hover-link-wrapper">
                <a href="/about">About</a>

                <div className="hover-wrapper">
                  <div className="hover-box">
                    <div className="hover-item">
                      <a href="/">Social</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="hover-container">
              <div className="hover-link-wrapper">
                <a href="/contact">Contact us</a>

                <div className="hover-wrapper">
                  <div className="hover-box">
                    <div className="hover-item">
                      <a href="/">Refer Friends</a>
                    </div>
                    <div className="hover-item">
                      <a href="/">Gift Card</a>
                    </div>
                    <div className="hover-item">
                      <a href="/">Loyalty</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/contact">Projects</a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <p>Cart: {0}</p>
          <a href="/appointments" className="appointment-btn">
            Appointments
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
