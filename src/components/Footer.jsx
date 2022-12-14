import "./Footer.css";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

import logo from "/media/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="Logo Vivace" />
      <hr className="footer-hr" />
      <div className="footer-info">
        <div className="footer-1">
          <h2>Sobre</h2>
          <span>
            A Vivace é uma loja de roupas femininas que acredita em valorizar a
            beleza e o estilo das mulheres. Oferecemos uma variedade de estilos
            para que todas as mulheres possam encontrar roupas para expressar
            sua individualidade. Com preços acessíveis, nossos produtos são de
            qualidade, feitos para durar e criar looks incríveis. Seja moderna,
            casual ou elegante, a Vivace tem a peça certa para você.
          </span>
        </div>
        <div className="footer-2">
          <h2>Contato</h2>
          <div>
            <a href="https://www.instagram.com/vivace.loja/" target={"_blank"}>
              <BsInstagram size={30} />
            </a>
            <a href="https://wa.me/5515981813023" target={"_blank"}>
              <BsWhatsapp size={30} />
            </a>
            <a href="mailto:vivace.contato01@gmail.com" target={"_blank"}>
              <MdOutlineMailOutline size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="devAutor">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/danielalmeidadetoledo/"
            target={"_blank"}
          >
            Daniel Toledo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
