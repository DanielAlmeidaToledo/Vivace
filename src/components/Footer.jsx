import "./Footer.css";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

import logo from "../media/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="Logo Vivace" />
      <hr className="footer-hr" />
      <div className="footer-info">
        <div className="footer-1">
          <h2>Sobre</h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae
            incidunt ducimus modi vitae voluptas consequatur consectetur ipsum
            repudiandae facere quod temporibus veritatis, saepe, harum
            aspernatur dolore! Autem, quaerat eligendi.
          </span>
        </div>
        <div className="footer-2">
          <h2>Contato</h2>
          <div>
            <a href="">
              <BsInstagram size={30} />
            </a>
            <a href="">
              <BsWhatsapp size={30} />
            </a>
            <a href="">
              <MdOutlineMailOutline size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
