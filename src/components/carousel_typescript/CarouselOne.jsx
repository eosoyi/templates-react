import React, { useState } from "react"

import "../carousel_typescript/style.css"

import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

// https://github.com/parthwebdev/react-carousels/tree/main/src/components/Carousel%2001
export const CarouselOne = ({ imgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? imgs.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 === imgs.length ? 0 : prevIndex + 1
    )
  }

  return (
    <>
      <section className="section-carousel-one">
        <div className="carousel-one">
          <div className="carousel-one-images">
            {imgs.map((img, index) => (
              <img
                key={index}
                src={img}
                className={currentIndex === index ? "active" : "inactive"}
              />
            ))}
          </div>
          <div className="carousel-one-controls">
            <button className="left-btn" onClick={handlePrevious}>
              <FaAngleLeft />
            </button>
            <button className="right-btn" onClick={handleNext}>
              <FaAngleRight />
            </button>
          </div>
          <div className="carousel-one-indicator">
            {imgs.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
