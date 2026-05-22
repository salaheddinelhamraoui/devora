import Slider from "react-slick";
import { useIntl } from "react-intl";

const Partner = () => {
  const intl = useIntl();

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
  };

  const partnerLogos = [
    "/images/movies/bar2.png",
    "/images/movies/bar1.png",
    "/images/movies/1.png",
    "/images/movies/2.png",
    "/images/movies/3.png",
    "/images/movies/4.png",
    "/images/movies/5.png",
    "/images/movies/6.png",
  ];

  return (
    <>
      <div
        className="col-xxl-10 col-md-9 m-auto"
        style={{
          paddingBottom: "50px",
        }}
      >
        <div className="title-style-seven text-center" data-aos="fade-up">
          <h2 className="main-title fw-bold tx-dark">
            {intl.formatMessage({ id: "movies.title1" })} <br />
            <span className="position-relative d-inline-block">
              {intl.formatMessage({ id: "movies.title2" })}
              <img src="/images/shape/shape_96.svg" alt="shape" />
            </span>
          </h2>
        </div>
      </div>
      <Slider {...settings} arrows={false}>
        {partnerLogos.map((logo, index) => (
          <div className="item" key={index}>
            <img src={logo} alt="" className="m-auto" />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Partner;
