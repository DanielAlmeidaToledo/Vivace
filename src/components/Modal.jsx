import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import { MdOutlineAddShoppingCart } from "react-icons/md";

import "./Modal.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Modal = ({ item, open, handleClose, addItem, showAlert }) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar className="modalTopo">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className="modalBtn"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className="modalTitle"
            >
              {item.name}
            </Typography>
            <Button
              className="modalBtn"
              autoFocus
              color="inherit"
              onClick={handleClose}
            >
              Voltar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <div className="modalContent">
            <img className="modalImg" src={item.image} alt="Produto" />
            <div className="modalInfo">
              <h3>{item.name}</h3>
              <p>{item.size}</p>
              <p>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button
                className="addCart"
                onClick={() => {
                  addItem(item);
                  showAlert();
                  handleClose();
                }}
              >
                <span>Adicionar</span>
                <MdOutlineAddShoppingCart size={25} className="iconAdd" />
              </button>
            </div>
          </div>
          <ListItem>
            <div className="modalDesc">
              <h3>Descrição</h3>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                corrupti officiis incidunt doloribus ea officia ipsam earum
                magni a blanditiis id rerum, ipsa, consequatur fuga. Ratione
                nostrum enim vel blanditiis.
              </span>
            </div>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default Modal;
