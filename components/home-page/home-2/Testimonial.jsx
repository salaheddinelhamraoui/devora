import React, { useRef } from "react";
import Slider from "react-slick";
import { useIntl } from "react-intl";

const Testimonial = () => {
  const intl = useIntl();

  const testimonials = [
    {
      quote: intl.formatMessage({ id: "reviews.1.description" }),
      author: "Sarah M.",
      location: "Berlin",
    },
    {
      quote: intl.formatMessage({ id: "reviews.1.description" }),
      author: "Martin K.",
      location: "Hamburg",
    },
    {
      quote: intl.formatMessage({ id: "reviews.1.description" }),
      author: "Lena S",
      location: "München",
    },
    {
      quote: intl.formatMessage({ id: "reviews.1.description" }),
      author: "Lena S",
      location: "München",
    },
    {
      quote: intl.formatMessage({ id: "reviews.1.description" }),
      author: "Max B.",
      location: "Frankfurt",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-md-10 mx-auto">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((testimonial, index) => (
              <div className="item" key={index}>
                <div className="feedback-block-six text-center">
                  <p className="text-white mb-65 lg-mb-50">
                    {testimonial.quote}
                  </p>
                  <h4 className="text-white d-inline-block position-relative">
                    {testimonial.author}{" "}
                    <span className="fw-light">{testimonial.location}</span>
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <ul className="slider-arrows slick-arrow-four sm-mt-40 d-flex justify-content-center style-none">
        <li
          className="prev_s2 slick-arrow tran3s"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <i className="bi bi-arrow-left" />
        </li>
        <li
          className="next_s2 slick-arrow tran3s"
          onClick={() => sliderRef.current.slickNext()}
        >
          <i className="bi bi-arrow-right" />
        </li>
      </ul>
    </div>
  );
};

export default Testimonial;
