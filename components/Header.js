import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

import LogoImage from "../assets/images/Logo.png";

const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      className={`site-header-one stricky  ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}>
      <div className="container-fluid">
        <div className="site-header-one__logo">
          <a href="/">
            <img src={LogoImage} width="101" alt="" />
          </a>
          <span className="side-menu__toggler" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <div className="main-nav__main-navigation">
          <NavLinks />
        </div>
        <div className="main-nav__right">
          <a
            href="https://forms.gle/jdGAdxAptHBcof4s6"
            className={`thm-btn ${props.btnClass}`}
            target="_blank"
            rel="noopener noreferrer">
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
