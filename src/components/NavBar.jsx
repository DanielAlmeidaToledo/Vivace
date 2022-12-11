import { FaSearch } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import * as Popover from "@radix-ui/react-popover";

import logo from "/media/logo1.png";

import "./NavBar.css";

import { useState } from "react";

const NavBar = ({
  cartShop,
  quantidade: countCart,
  removeItem,
  addItem,
  searchFilter,
}) => {
  const [search, setSearch] = useState("");
  var totalPrice = 0;

  return (
    <header className="NavBar">
      <a href="/">
        <img src={logo} alt="Logo Vivace" className="logo" />
      </a>
      <ul className="nav-ul">
        <li className="nav-li navSearch">
          <input
            placeholder="Pesquisar..."
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            className="icon-search"
            onClick={() => searchFilter(search.toLowerCase())}
          />
        </li>
        <li className="nav-li navProdutos">
          <a href="/">Produtos</a>
        </li>

        <li className="nav-li">
          <Popover.Root>
            <Popover.Trigger className="liCart">
              <span className="countCart"> {countCart} </span>
              <MdShoppingCart className="iconCart" size={30} />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="cartContent">
                <div className="cartShop">
                  <h3>Carrinho de Compras</h3>
                  {cartShop.length === 0 ? (
                    <div>
                      <span className="cartVazio">Nenhum item ainda :(</span>
                      <Popover.Close className="btnBuy" aria-label="Close">
                        Comprar agora
                      </Popover.Close>
                    </div>
                  ) : (
                    <div>
                      {cartShop.map((item) => {
                        const { name, price, size, image, count } = item;
                        totalPrice += item.price;
                        return (
                          <div key={item.image} className="itemCart">
                            <img src={item.image} alt={item.name} />
                            <div className="infoCart">
                              <h4>{item.name}</h4>
                              <p className="infoPrice">
                                {item.price.toLocaleString("pt-br", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </p>
                              <p className="infoQuant">
                                Quantidade: {item.count}
                              </p>
                            </div>
                            <div className="iconsBtn">
                              <button onClick={() => addItem(item)}>
                                <AiOutlinePlusCircle
                                  className="iconItem"
                                  size={20}
                                />
                              </button>
                              <button onClick={() => removeItem(item)}>
                                <AiOutlineMinusCircle
                                  className="iconItem"
                                  size={20}
                                />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      <p className="totalPrice">
                        Valor total:{" "}
                        {totalPrice.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <a
                        target={"_blank"}
                        href={`https://api.whatsapp.com/send?phone=5515981813023&text=%E2%9C%A8%20*VIVACE*%20%E2%9C%A8%0A%0AOii,%20tudo%20bem?%20%0AGostei%20desses%20itens%20e%20tenho%20interesse%20em%20comprar:${cartShop.map(
                          (item) => {
                            const { name, price, size, image, count } = item;
                            return `%0A%0A*Item:*%20${name}%0A*Tamanho:*%20${size}%0A*Quantidade:*%20${count}%0A*Valor:*%20${price.toLocaleString(
                              "pt-br",
                              {
                                style: "currency",
                                currency: "BRL",
                              }
                            )}`;
                          }
                        )}`}
                        className="btnBuy"
                      >
                        Finalizar Compra
                      </a>
                    </div>
                  )}
                </div>
                <Popover.Close className="cartClose" aria-label="Close">
                  <AiOutlineClose />
                </Popover.Close>
                <Popover.Arrow className="cartArrow" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </li>
      </ul>
    </header>
  );
};

export default NavBar