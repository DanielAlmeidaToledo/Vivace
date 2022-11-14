import './Product.css'

import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = ({ product, addItem, showAlert }) => {
  return (
    <main className="items">
      {product.map((item) => {
        const { name, price, image } = item;
        return (
          <div className="item" key={name}>
            <img src={image} alt="" />
            <p>{name}</p>
            <h3>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>

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