import { useIntl } from "react-intl";

const NewsLetter = () => {
  const intl = useIntl();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit} className="position-relative">
      <input type="email" placeholder="E-Mail" required />
      <button className="tran3s fw-500 position-absolute">
        {intl.formatMessage({ id: "newsLetter.register" })}
      </button>
    </form>
  );
};

export default NewsLetter;
