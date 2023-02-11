import "./Product.css";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaSadCry } from "react-icons/fa";

const Product = ({ products, addItem, showAlert, handleClickOpen, title }) => {
  return (
    <main className="items">
      <h2 className="titleProducts">{title}</h2>
      {products.map((item) => {
        const { name, price, size, image, quant } = item;
        let numSize = "";
        return (
          <div className="item" key={name}>
            <button
              className="btnProduct"
              onClick={() => handleClickOpen(item)}
            >
              <img src={image[0]} alt="" />
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
                    <button
                      onClick={() => (numSize = num)}
                      className="numSize"
                      key={num}
                      value={numSize}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>
            {quant === 0 ? (
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
          </div>
        );
      })}
      {products.length === 0 && (
        <h4 className="naoEncontrado">Nenhum produto encontrado :(</h4>
      )}
    </main>
  );
};

export default Product;
