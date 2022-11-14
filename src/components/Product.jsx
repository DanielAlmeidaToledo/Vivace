import './Product.css'

import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = ({ product, addItem, showAlert, handleClickOpen }) => {
  return (
    <main className="items">
      {product.map((item) => {
        const { name, price, size, image } = item;
        return (
          <div className="item" key={name}>
            <button
              className="btnProduct"
              onClick={() => handleClickOpen(item)}
            >
              <img src={image} alt="" />
            </button>
            <p>{name}</p>
            <div className="infos">
              <h3>
                {price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
              <div>
                {size.map((num) => {
                  return (
                    <button className="numSize" key={num} value={num} href="">
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              className="addCart"
              onClick={() => {
                addItem(item);
                showAlert();
              }}
            >
              <span>Adicionar</span>
              <MdOutlineAddShoppingCart size={25} className="iconAdd" />
            </button>
          </div>
        );
      })}
    </main>
  );
};

export default Product