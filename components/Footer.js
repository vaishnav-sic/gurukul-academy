import React from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import SICLogo from "../assets/images/SIC_LogoName.svg";
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <div>
      <section className="mailchimp-one">
        <div className="container wow fadeInUp">
          <div className="inner-container">
            <div className="mailchimp-one__icon">
              <i className="apton-icon-mail"></i>
            </div>
            <form action="#" className="mailchimp-one__form">
              <div className="center-text1">
                <h4>Seeking In-Depth Information?</h4>
              </div>
              <a href="/#enquire" className="thm-btn banner-one__btn">
                <span>Dive In!</span>
              </a>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={Logo} width="129" alt="" />
                  </a>
                  <p>
                    GURUKUL ACADEMY <br /> makes you 100% Success
                    <br /> We also provide Training, Internships
                    <br /> in all branches.
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Training</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/#features">Features</Link>
                      </li>
                      <li>
                        <Link href="/#speciality">Speciality</Link>
                      </li>
                      {/* <li>
                        <a href="#">Services</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/mystore">My Store</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/#syllabus">Syllabus</Link>
                      </li>
                      {/* <li>
                        <a href="#">Free Trial</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/internship#internshipsyllabus">
                          Engineering
                        </Link>
                      </li>
                      <li>
                        <Link href="/#enquire">Diploma</Link>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                <div className="footer-widget">
                  <div className="footer-widget__social">
                    <a href="https://api.whatsapp.com/send?phone=918668932640">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://in.linkedin.com/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/gurukul_engineering_academy?igsh=NG5mM252YXd6Z2Mz">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container text-center">
            <p className="site-footer__copy">
                &copy; सर्वहक्कस्वाधीन २०२५ &nbsp;{" "}
                <a href="https://www.swasamvedya.com/" target="_blank">
                <img src={SICLogo} width="129" alt="" />
                </ a>
                &nbsp;&nbsp; द्वारे ❤ प्रेमपूर्वक विकसित
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
