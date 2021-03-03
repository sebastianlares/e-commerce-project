import React from "react";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
  RiMailFill,
  RiCellphoneFill,
} from "react-icons/ri";
import "./footer.css";
import { useGlobalContext } from "../../globalContext";
import FooterModal from "../FooterModal/FooterModal";
import { data } from "../../data/footerData.js";

function Footer() {
  const { openModal } = useGlobalContext();
  const iconsStyle = {
    width: "20px",
    height: "20px",
  };
  const redes = [
    {
      red: "https://www.instagram.com/cushi.homewear/",
      link: RiInstagramFill,
      pagina: "@cushi.homewear",
    },
    {
      red: "https://twitter.com/cushiwear",
      pagina: "@cushiwear",
      link: RiTwitterFill,
    },
    {
      red: "https://www.facebook.com/cushi.homewear",
      pagina: "cushi.homewear",
      link: RiFacebookCircleFill,
    },
  ];

  const contacto = [
    {
      data: "sebastian.laresh@gmail.com",
      icon: RiMailFill,
    },
    {
      data: "+541130254158",
      icon: RiCellphoneFill,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="redes">
          <h4>Nuestras Redes</h4>
          {redes.map((red, index) => {
            return (
              <a
                href={red.red}
                alt={red.red}
                target="_blank"
                key={index}
                rel="noopener noreferrer"
              >
                <red.link style={iconsStyle} />
                <p>{red.pagina}</p>
              </a>
            );
          })}
        </section>
        <section className="contacto">
          <h4>Contacto</h4>
          {contacto.map((item, index) => {
            return (
              <div className="cnt" key={index}>
                <item.icon style={iconsStyle} /> <p>{item.data}</p>
              </div>
            );
          })}
        </section>
        <section className="ayuda">
          <h4>Ayuda</h4>
          <>
            {data.map((item, index) => {
              const { question, answer, id } = item;
              console.log(id);
              return (
                <>
                  <p key={id} onClick={openModal}>
                    {question}
                  </p>
                  <FooterModal
                    key={index}
                    answer={answer}
                    question={question}
                  />
                </>
              );
            })}
          </>
        </section>
      </div>

      <a
        href="https://github.com/sebastianlares"
        alt="github-link"
        className="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubFill />
      </a>
    </footer>
  );
}

export default Footer;
