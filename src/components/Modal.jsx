import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import "./Modal.css";

const Modal = ({ item, open, handleClose, addItem, showAlert }) => {
  return (
    <div className="Modal">
      <Dialog
        maxWidth="lg"
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="dialogContent">
          <button onClick={handleClose} className="dialogClose" autoFocus>
            X
          </button>
          <DialogContentText id="alert-dialog-description">
            <div className="product">
              <img className="dialogImg" src={item.image} alt="" />
              <div className="information">
                <h3>{item.name}</h3>
                <p>
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <div>
                  {item.size.map((num) => {
                    return (
                      <button className="numSize" key={num} value={num} href="">
                        {num}
                      </button>
                    );
                  })}
                </div>
                <button
                  className="addCartModal"
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
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
