import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import Slider from "react-slick";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaSadCry } from "react-icons/fa";

import "./Modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Modal = ({ item, open, handleClose, addItem, showAlert }) => {
  const imgPhotos = item.image;
  const sizeDisp = item.size;
  let numSize = "";

  const settings = {
    customPaging: (i) => {
      return (
        <a className="modalA">
          <img className="modalImg1" src={imgPhotos[i++]} alt="Produto" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 700,
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} className="top1">
          <Toolbar className="modalTopo">
            <Button
              className="modalBtn btnClose1"
              autoFocus
              color="inherit"
              onClick={handleClose}
            >
              Voltar
            </Button>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="modalTitle"
            >
              {item.name}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className="modalBtn"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <div className="modalContent">
            <Slider {...settings} className="photoSlider">
              {imgPhotos.map((url) => {
                return (
                  <div key={url} className="modalImgDiv">
                    <img className="modalImg" src={url} alt="Produto" />
                  </div>
                );
              })}
            </Slider>
            <div className="modalInfo">
              <h3 className="mfTitle">{item.name}</h3>
              <div className="mfSize">
                Tamanhos:
                {sizeDisp.map((num) => {
                  return (
                    <button
                      onClick={() => (numSize = num)}
                      className="numSize"
                      key={num}
                      value={num}
                      href=""
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
              <p className="mfPrice">
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              {item.quant === 0 ? (
                <button className="addCart addEsgotado">
                  <span>Esgotado</span>
                  <FaSadCry size={25} className="iconAdd" />
                </button>
              ) : (
                <button
                  className="addCart"
                  onClick={() => {
                    addItem(item, numSize);
                    showAlert(numSize);
                  }}
                >
                  <span>Adicionar</span>
                  <MdOutlineAddShoppingCart size={25} className="iconAdd" />
                </button>
              )}
              <div className="modalDesc">
                <h3 className="descTitle">Descrição</h3>
                <span>
                  {item.description}
                  <br />
                  <br />
                  {item.descSize}
                </span>
              </div>
            </div>
          </div>
          <ListItem></ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default Modal;
