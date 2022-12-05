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
    size: ["P", "M", "G"],
    categories: ["hot"],
    image: "src/media/roupas/bdChiclete.jpg",
  },
  {
    id: 2,
    name: "Body Bege",
    price: 39.0,
    size: ["P", "M", "G"],
    categories: ["hot"],
    image: "src/media/roupas/bdRosado.jpg",
  },
  {
    id: 3,
    name: "Body Verde Esmeralda",
    price: 55.0,
    size: ["P", "M", "G"],
    categories: ["hot"],
    image: "src/media/roupas/bdVerde.jpg",
  },
  {
    id: 4,
    name: "Cropped Cavado Preto",
    price: 29.9,
    size: ["P", "M", "G"],
    categories: ["hot"],
    image: "src/media/roupas/cavadoPreto1.jpg",
  },
  {
    id: 5,
    name: "Cropped Cavado Vermelho",
    price: 49.0,
    size: ["P", "M", "G"],
    categories: ["hot"],
    image: "src/media/roupas/cavadoVermelho.jpg",
  },
  {
    id: 6,
    name: "Cropped Regata Preto",
    price: 49.0,
    size: ["P", "M", "G"],
    categories: ["hot"],
    image: "src/media/roupas/cpReg.jpg",
  },
  {
    id: 7,
    name: "Cropped Trançado Branco",
    price: 29.0,
    size: ["P", "M", "G"],
    categories: ["promo"],
    image: "src/media/roupas/cpBranco.jpg",
  },
  {
    id: 8,
    name: "Cropped Trançado Preto",
    price: 29.0,
    size: ["P", "M", "G"],
    categories: ["promo"],
    image: "src/media/roupas/cpPreto.jpg",
  },
  {
    id: 9,
    name: "Cropped Meia Lua Pink",
    price: 29.0,
    size: ["P", "M", "G"],
    categories: ["promo"],
    image: "src/media/roupas/luaPink.jpg",
  },
  {
    id: 10,
    name: "Cropped Meia Lua Preto",
    price: 29.0,
    size: ["P", "M", "G"],
    categories: ["releases"],
    image: "src/media/roupas/luaPreto.jpg",
  },
  {
    id: 11,
    name: "Calça Lisa Bege",
    price: 29.0,
    size: ["P", "M", "G"],
    categories: ["releases"],
    image: "src/media/roupas/calcaBege1.jpg",
  },
  {
    id: 12,
    name: "Calça Lisa Preta",
    price: 29.0,
    size: ["P", "M", "G"],
    categories: ["releases"],
    image: "src/media/roupas/calcaPreta.jpg",
  },
  {
    id: 13,
    name: "Vestido Curto Com Fenda",
    price: 79.0,
    size: ["P"],
    categories: ["releases"],
    image: "src/media/roupas/vtCurto3.jpg",
  },
];

/* Novidades */
const hotProducts = products.filter((product) =>
  product.categories.includes("hot")
);

/* Lançamentos */
const releaseProducts = products.filter((product) =>
  product.categories.includes("releases")
);

/* Promoções */
const promoProducts = products.filter((product) =>
  product.categories.includes("promo")
);

function App() {
  const [cartShop, setCartShop] = useState([]);
  const [countCart, setCountCart] = useState(cartShop.length);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [prod, setProd] = useState();
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

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={removeItem}
        addItem={addItem}
      />
      <BrowserRouter>
        <div className="filter">
          <div className="hamburguer">
            <Hamburger toggled={isOpenHamb} toggle={setOpenHamb} color="#fff" />
          </div>
          <Link className="filterLink" to="/">
            Todos os Produtos
          </Link>
          <Link className="filterLink" to="/lancamentos">
            Lançamentos
          </Link>
          <Link className="filterLink" to="/mais-vendidos">
            Mais Vendidos
          </Link>
          <Link className="filterLink" to="/promocoes">
            Promoções
          </Link>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slide />
                <Product
                  products={products}
                  addItem={addItem}
                  showAlert={showAlert}
                  handleClickOpen={handleClickOpen}
                  title="Todos os Produtos"
                />
              </>
            }
          ></Route>
          <Route
            path="/lancamentos"
            element={
              <Product
                products={hotProducts}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Lançamentos"
              />
            }
          ></Route>
          <Route
            path="/mais-vendidos"
            element={
              <Product
                products={releaseProducts}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Mais Vendidos"
              />
            }
          ></Route>
          <Route
            path="/promocoes"
            element={
              <Product
                products={promoProducts}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Promoções"
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
