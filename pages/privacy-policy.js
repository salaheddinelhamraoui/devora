import { useIntl } from "react-intl";

import Seo from "../components/common/Seo";
import DefaultFooter from "../components/footer/DefaultFooter";
import Testimonial from "../components/home-page/home-3/Testimonial";
import Header2 from "../components/header/Header2";

const Privacy = () => {

    const intl = useIntl();

    return (
        <>
            <Seo pageTitle={intl.formatMessage({ id: "privacy.title" })} />

            <Header2 />

            <div className="fancy-feature-fiftyOne position-relative mt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 md-mb-40">
                                <div className="sc-title-two fst-italic position-relative">
                                    {intl.formatMessage({ id: "privacy.subTitle" })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">

                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description1" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description2" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description3" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description4" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description5" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description6" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description7" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description8" })}

                                </p>

                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description9" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description10" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description11" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description12" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description13" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description14" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description15" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description16" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description17" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description18" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description19" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description20" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description21" })}

                                </p>
                                <p className="text-lg tx-dark">
                                    {intl.formatMessage({ id: "privacy.description22" })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}

                <img
                    src="/images/shape/shape_171.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                />
                <img
                    src="/images/shape/shape_172.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                />
            </div>

            <DefaultFooter />
        </>
    );
};

export default Privacy;
