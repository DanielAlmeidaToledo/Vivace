import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Alert from "@mui/material/Alert";
import Hamburger from "hamburger-react";

import { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./App.css";

/* Todos os produtos */
const products = [
  {
    id: 1,
    name: "Body Rosa",
    price: 49.0,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/bdChiclete.jpg"],
  },
  {
    id: 2,
    name: "Body Bege",
    price: 39.0,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/bdRosado.jpg"],
  },
  {
    id: 3,
    name: "Body Verde Esmeralda",
    price: 55.0,
    size: ["P"],
    categories: ["bodyCropped"],
    image: ["media/roupas/bdVerde.jpg"],
  },
  {
    id: 4,
    name: "Cropped Cavado Preto",
    price: 29.9,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cavadoPreto1.jpg", "media/roupas/cavadoPreto2.jpg"],
  },
  {
    id: 5,
    name: "Cropped Cavado Vermelho",
    price: 49.0,
    size: ["P"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cavadoVermelho.jpg"],
  },
  {
    id: 6,
    name: "Cropped Regata Preto",
    price: 49.0,
    size: ["M", "G"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cpReg.jpg"],
  },
  {
    id: 7,
    name: "Cropped Trançado Branco",
    price: 29.0,
    size: ["P", "M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cpBranco.jpg"],
  },
  {
    id: 8,
    name: "Cropped Trançado Preto",
    price: 29.0,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cpPreto.jpg"],
  },
  {
    id: 9,
    name: "Cropped Meia Lua Pink",
    price: 29.0,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/luaPink.jpg"],
  },
  {
    id: 10,
    name: "Cropped Meia Lua Preto",
    price: 29.0,
    size: ["P", "M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/luaPreto.jpg"],
  },
  {
    id: 11,
    name: "Cropped Longo Preto",
    price: 79.0,
    size: ["P"],
    categories: ["bodyCropped"],
    image: ["media/roupas/longoPreto.jpg"],
  },
  {
    id: 12,
    name: "Calça Lisa Preta",
    price: 29.0,
    size: ["M"],
    categories: ["calcaSaia"],
    image: ["media/roupas/calcaPreta.jpg"],
  },
  {
    id: 13,
    name: "Vestido Curto Com Fenda",
    price: 79.0,
    size: ["P"],
    categories: ["vestido"],
    image: [
      "media/roupas/vtCurto3.jpg",
      "media/roupas/vtCurto1.jpg",
      "media/roupas/vtCurto2.jpg",
    ],
  },
  {
    id: 14,
    name: "Calça Lisa Bege",
    price: 29.0,
    size: ["P"],
    categories: ["calcaSaia"],
    image: ["media/roupas/calcaBege1.jpg", "media/roupas/calcaBege2.jpg"],
  },
  {
    id: 15,
    name: "Saia Rosa",
    price: 59.0,
    size: ["P"],
    categories: ["calcaSaia"],
    image: ["media/roupas/saia.jpg"],
  },
];

/* Novidades */
const bodyCropped = products.filter((product) =>
  product.categories.includes("bodyCropped")
);

/* Lançamentos */
const calcaSaia = products.filter((product) =>
  product.categories.includes("calcaSaia")
);

/* Promoções */
const vestido = products.filter((product) =>
  product.categories.includes("vestido")
);

function App() {
  const [cartShop, setCartShop] = useState([]);
  const [countCart, setCountCart] = useState(cartShop.length);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [prod, setProd] = useState();
  const [prods, setProds] = useState(products);
  const [isOpenHamb, setOpenHamb] = useState(false);

  /* Adiciona item no carrinho de compras */
  function addItem(item) {
    setCountCart((countCart) => countCart + 1);
    let index = cartShop.findIndex((product) => product.id == item.id);
    if (index < 0) {
      cartShop.push({
        id: item.id,
        name: item.name,
        price: item.price,
        size: item.size,
        image: item.image,
        count: 1,
      });
    } else {
      cartShop[index].count++;
      cartShop[index].price += item.price / (cartShop[index].count - 1);
    }
  }

  /* Remove item no carrinho de compras */
  function removeItem(item) {
    setCountCart((countCart) => countCart - 1);
    let index = cartShop.findIndex((product) => product.id == item.id);
    cartShop[index].price -= item.price / item.count;
    cartShop[index].count--;
    if (item.count === 0) {
      cartShop.splice(index, 1);
    }
  }

  /* Alerta de adição de itens no carrinho */
  const showAlert = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleClickOpen = (item) => {
    setOpen1(true);
    setProd(item);
  };

  const handleClose = () => {
    setOpen1(false);
  };

  /* SEARCH */

  function searchFilter(valueSearch) {
    setProds(
      products.filter((prod) => prod.name.toLowerCase().includes(valueSearch))
    );
  }

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={removeItem}
        addItem={addItem}
        searchFilter={searchFilter}
      />
      <BrowserRouter>
        <div className="filter">
          <div className="hamburguer">
            <Hamburger toggled={isOpenHamb} toggle={setOpenHamb} color="#fff" />
          </div>
          <Link className="filterLink" to="/">
            Todos os Produtos
          </Link>
          <Link className="filterLink" to="/body-cropped">
            Body / Cropped
          </Link>
          <Link className="filterLink" to="/calças-saias">
            Calças / Saias
          </Link>
          <Link className="filterLink" to="/vestidos">
            Vestidos
          </Link>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slide />
                <Product
                  products={prods}
                  addItem={addItem}
                  showAlert={showAlert}
                  handleClickOpen={handleClickOpen}
                  title="Todos os Produtos"
                />
              </>
            }
          ></Route>
          <Route
            path="/body-cropped"
            element={
              <Product
                products={bodyCropped}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Body / Cropped"
              />
            }
          ></Route>
          <Route
            path="/calças-saias"
            element={
              <Product
                products={calcaSaia}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Calças / Saias"
              />
            }
          ></Route>
          <Route
            path="/vestidos"
            element={
              <Product
                products={vestido}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Vestidos"
              />
            }
          ></Route>
        </Routes>

        {open && (
          <Alert className="alertAdd" variant="filled" severity="success">
            Produto adicionado no carrinho
          </Alert>
        )}

        <Footer />

        {open1 && (
          <Modal
            item={prod}
            open={open1}
            handleClose={handleClose}
            addItem={addItem}
            showAlert={showAlert}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
