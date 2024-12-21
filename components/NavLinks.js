import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          Features
        </ScrollLink>
      </li>
      <li>
        <Link href="/mystore">My Store</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          Pricing
        </ScrollLink>
      </li> */}
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          Team
        </ScrollLink>
      </li> */}
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          Screens
        </ScrollLink>
      </li> */}
      {/* <li className="dropdown">
        <Link href="/blog">
          <>
            News
            <i className="fa fa-angle-down" onClick={handleDropdownStatus}></i>
          </>
        </Link>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link href="/blog">News</Link>
          </li>
          <li>
            <Link href="/blog-post">News Details</Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
