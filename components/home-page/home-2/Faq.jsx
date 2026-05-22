import { useIntl } from "react-intl";

const Faq = () => {
  const intl = useIntl();

  const faqData = [
    {
      question: intl.formatMessage({ id: "faq.1.title" }),
      answer: intl.formatMessage({ id: "faq.1.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.2.title" }),
      answer: intl.formatMessage({ id: "faq.2.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.3.title" }),
      answer: intl.formatMessage({ id: "faq.3.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.4.title" }),
      answer: intl.formatMessage({ id: "faq.4.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.5.title" }),
      answer: intl.formatMessage({ id: "faq.5.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.6.title" }),
      answer: intl.formatMessage({ id: "faq.6.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.7.title" }),
      answer: intl.formatMessage({ id: "faq.7.description" }),
    },
    {
      question: intl.formatMessage({ id: "faq.8.title" }),
      answer: intl.formatMessage({ id: "faq.8.description" }),
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
