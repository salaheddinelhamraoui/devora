import Slider from "react-slick";
import { useIntl } from "react-intl";

const Testimonial = () => {
  const intl = useIntl();

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const testimonial = [
    {
      id: 1,
      title: intl.formatMessage({ id: "reviews.1.title" }),
      rating: 5,
      text: intl.formatMessage({ id: "reviews.1.description" }),
      author: "Sarah M.",
      location: "Berlin",
      image: "/images/media/img_54.jpg",
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "reviews.2.title" }),
      rating: 5,
      text: intl.formatMessage({ id: "reviews.2.description" }),
      author: "Martin K.",
      location: "Hamburg",
      image: "/images/media/img_55.jpg",
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "reviews.3.title" }),
      rating: 5,
      text: intl.formatMessage({ id: "reviews.3.description" }),
      author: "Lena S",
      location: "Paris",
      image: "/images/media/img_54.jpg",
    },
    {
      id: 4,
      title: intl.formatMessage({ id: "reviews.4.title" }),
      rating: 5,
      text: intl.formatMessage({ id: "reviews.4.description" }),
      author: "Max B.",
      location: "Flevoland",
      image: "/images/media/img_55.jpg",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {testimonial.slice(0, 4).map((item) => (
          <div className="item" key={item.id}>
            <div className="feedback-block-eleven">
              <div className="top-header d-flex align-items-center justify-content-between">
                <div>
                  <h3 className="tx-dark m0">{item.title}</h3>
                  <ul className="style-none d-flex rating pt-15">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <li key={index}>
                        <i className="bi bi-star-fill" />
                      </li>
                    ))}
                  </ul>
                </div>
                <img src="/images/icon/icon_112.svg" alt="" width={50} />
              </div>
              <p className="tx-dark">{item.text}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="cost fw-500 tx-dark fs-20">
                  {item.author},{" "}
                  <span className="opacity-50 fw-normal">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
