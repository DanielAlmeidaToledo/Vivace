import {MdOutlinePayments} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaLaptopHouse} from 'react-icons/fa'
import Slider from "react-slick";

import "./Slide.css";

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 100,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const imgSlides = [
    { name: "Imagem 1 - Slide", img: "./../src/media/slide/Slide1.png" },
    { name: "Imagem 2 - Slide", img: "./../src/media/slide/Slide2.png" },
    { name: "Imagem 3 - Slide", img: "./../src/media/slide/Slide3.png" },
  ];

  const infos = [
    {
      title: "Pagamentos",
      sub: "Pix, Dinheiro e Depósitos.",
      icon: <MdOutlinePayments size={50} className="icon" />,
    },
    {
      title: "Entrega em Boituva/SP",
      sub: "Levamos a sua encomenda até você.",
      icon: <TbTruckDelivery size={50} className="icon" />,
    },
    {
      title: "Frete",
      sub: "O valor do frete varia conforme o seu bairro.",
      icon: <FaLaptopHouse size={50} className="icon" />,
    },
  ];

  return (
    <div className="slide">
      <Slider {...settings} className="slider">
        {imgSlides.map((item) => {
          const { name, img } = item;
          return (
            <div className="div-slide" key={item.name}>
              <img src={item.img} alt={item.name} />
            </div>
          );
        })}
      </Slider>

      <section className="info">
        {infos.map((info) => {
          const { title, sub, icon } = info;
          return (
            <div className="info1" key={info.title}>
              <div className="iconInfo">{info.icon}</div>
              <div>
                <h3>{info.title}</h3>
                <span>{info.sub}</span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Slide