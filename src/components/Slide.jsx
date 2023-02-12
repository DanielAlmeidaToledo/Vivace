import { MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaLaptopHouse } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./Slide.css";

function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        margin: "0 2rem",
        display: "block",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 100,
    adaptiveHeight: true,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  const imgSlides = [
    { name: "novidades", img: "/media/slide/Slide3.png" },
    { name: "queridinhos", img: "/media/slide/Slide2.png" },
  ];

  const infos = [
    {
      title: "Pagamentos",
      sub: "Pix, Débito e Crédito (crédito com acrescimo de 5%).",
      icon: <MdOutlinePayments size={50} className="icon" />,
    },
    {
      title: "Entrega em Boituva/SP",
      sub: "Levamos a sua encomenda até você.",
      icon: <TbTruckDelivery size={50} className="icon" />,
    },
    {
      title: "Frete",
      sub: "O valor varia conforme o bairro (R$5,00 - R$10,00).",
      icon: <FaLaptopHouse size={50} className="icon" />,
    },
  ];

  return (
    <div className="slide">
      <Slider {...settings} className="slider">
        {imgSlides.map((item) => {
          const { name, img } = item;
          return (
            <div className="div-slide" key={name}>
              <Link to={name}>
                <img src={img} alt={name} />
              </Link>
            </div>
          );
        })}
      </Slider>

      <section className="info">
        {infos.map((info) => {
          const { title, sub, icon } = info;
          return (
            <div className="infoDiv" key={title}>
              <div className="iconInfo">{icon}</div>
              <div>
                <h3>{title}</h3>
                <span className="infoSub">{sub}</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Slide;
