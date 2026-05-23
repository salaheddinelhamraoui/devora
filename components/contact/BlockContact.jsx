import Image from "next/image";
import { useIntl } from "react-intl";

const BlockContact = () => {
  const intl = useIntl();

  const addressBlocks = [
    {
      icon: "/images/icon/icon_147.svg",
      title: intl.formatMessage({ id: "contact.1.title" }),
      content: intl.formatMessage({ id: "contact.1.content" }),
      delay: "100",
    },
    {
      icon: "/images/icon/icon_148.svg",
      title: intl.formatMessage({ id: "contact.2.title" }),
      content: intl.formatMessage({ id: "contact.2.content" }),
      link: "mailto:contact@devorasystems.com",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_149.svg",
      title: intl.formatMessage({ id: "contact.3.title" }),
      content: intl.formatMessage({ id: "contact.3.content" }),
      link: "mailto:contact@devorasystems.com",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace(/^(tel:|mailto:)/, "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
