import { useIntl } from "react-intl";

const Block = () => {
  const intl = useIntl();

  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8 wow fadeInDown">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#16A34A" }}>
              {intl.formatMessage({ id: "" })}+23.000 zufriedene Kunden
            </h3>
            <p>
              {intl.formatMessage({ id: "" })} Mit über 23.000 zufriedenen
              Kunden sind wir stolz darauf, einen herausragenden Service bei
              Devora anzubieten.
            </p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7 wow fadeInDown">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#15803D" }}>
              27+ <br />
              <span>
                {" "}
                {intl.formatMessage({ id: "" })}Server in ganz Deutschland
              </span>
            </h3>
            <p>
              {intl.formatMessage({ id: "" })} Mit über 27 Servern in ganz
              Deutschland garantiert Devora eine umfassende Abdeckung und
              optimale Streaming-Performance.
            </p>
            <img
              src="/images/shape/shape_138.svg"
              alt="sahpe"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5 wow fadeInUp">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#0EA5E9" }}>
              <span>{intl.formatMessage({ id: "" })}Hilfe</span>
            </h3>
            <p>
              {intl.formatMessage({ id: "" })} Unser engagiertes Support-Team
              steht Ihnen rund um die Uhr zur Verfügung, um bei Fragen oder
              Problemen behilflich zu sein.
            </p>
          </div>
          {/* /.block-wrapper */}
          <img
            src="/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
