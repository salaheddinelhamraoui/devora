import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useIntl } from "react-intl";

const ContactForm = () => {
  const form = useRef();
  const intl = useIntl();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_zgpnv8l",
        "template_77dw0b4",
        form.current,
        "ya0BiUtY0kksgz31e"
      )
      .then(
        (result) => {
          // reset form
          toast.success("E-mail is succesvol verzonden!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder={intl.formatMessage({ id: "contact.name" })}
                name="name"
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
              <input
                type="email"
                placeholder={intl.formatMessage({ id: "contact.email" })}
                name="email"
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder={intl.formatMessage({ id: "contact.subject" })}
                name="message"
                required="required"
                data-error="Please,leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <button className="btn-twentyOne fw-500 tran3s d-block">
              {intl.formatMessage({ id: "contact.send" })}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
