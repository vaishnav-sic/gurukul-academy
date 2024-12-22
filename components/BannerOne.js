"use client";
import React, { useState, useEffect } from "react";
import engineers from "../assets/images/resources/engineers.jpg";
import contact from "../assets/images/resources/contact-1-1.jpg";

function BannerOne() {
    const images = [engineers, contact, engineers, contact];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div
        className="slider-container"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          className="slider"
          style={{
            display: "flex",
            width: `${images.length * 100}%`, 
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: `${100 / images.length}%`, 
                height: "auto",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
        <div
          className="navigation-dots"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
          }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "10px",
                height: "10px",
                margin: "0 5px",
                borderRadius: "50%",
                background: index === currentIndex ? "#fff" : "#aaa",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerOne;