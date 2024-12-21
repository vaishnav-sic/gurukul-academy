import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/banner-image-1-1.jpg";
import BannerMoc from "../assets/images/resources/banner-moc-1-1.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const [textIndex, setTextIndex] = useState(0);
  const [subTextOptions, setSubTextOptions] = useState([
    "Training",
    "Placement",
  ]);

  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % subTextOptions.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [subTextOptions.length]);

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}></div>
      <div className="container">
        {/* <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="AxggwtFhVIM"
          onClose={() => setOpen({ isOpen: false })}
        />
        <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div> */}
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL">
                <div className="center-text">
                  <h5>Seeking In-Depth Information?</h5>
                </div>
                <a href="#enquire" className="thm-btn banner-one__btn">
                  <span>Dive In!</span>
                </a>
              </form>
              <div className="mc-form__response"></div>
              <h3>
                Best Industry <br />
                <div className="blue-text">{subTextOptions[textIndex]}</div>
              </h3>
              <p>Guaranteed 100% Success</p>
              <a href="#enquire" className="thm-btn banner-one__btn">
                <span>Discover More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
