import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useIntl } from "react-intl";

import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import DefaultFooter from "../components/footer/DefaultFooter";
import Header2 from "../components/header/Header2";

const Contact = () => {
  const intl = useIntl();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Seo pageTitle={intl.formatMessage({ id: "menu.contactUs" })} />
      <Header2 />
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  {intl.formatMessage({ id: "contact.details" })}
                </div>
                <h2 className="main-title fw-500 tx-dark">{intl.formatMessage({ id: "contact.getInTouch" })}</h2>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                {intl.formatMessage({ id: "contact.title2" })}
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>

      <DefaultFooter />
    </>
  );
};

export default Contact;
