import NavBar from "./components/NavBar";
import Slide from "./components/Slide";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Alert from "@mui/material/Alert";
import Hamburger from "hamburger-react";
import * as Popover from "@radix-ui/react-popover";

import { useState } from "react";
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./App.css";

/* Todos os produtos */
const products = [
  {
    id: 19,
    name: "Ciganinha Marsala",
    price: 59.9,
    quant: 1,
    size: ["G"],
    categories: ["bodyCropped", "novidades"],
    image: [
      "media/roupas/cpCig1.JPG",
      "media/roupas/cpCig2.JPG",
      "media/roupas/cpCig3.JPG",
    ],
    description: "🧣 Cropped Ciganinha Marsala (Com bojo).",
    descSize: "📐 Tamanho G disponível.",
  },
  {
    id: 17,
    name: "Cropped Azul Tricot",
    price: 59.9,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: ["media/roupas/cpAzul.JPG"],
    description: "🧣 Cropped azul confeccionado em Tricot.",
    descSize: "📐 Tamanho único, veste de M até GG.",
  },
  {
    id: 23,
    name: "Cropped Verde Tricot",
    price: 59.9,
    quant: 1,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: ["media/roupas/cpVerde.jpg"],
    description: "🧣 Cropped verde confeccionado em Tricot.",
    descSize: "📐 Tamanho único, veste de P até G.",
  },
  {
    id: 15,
    name: "Vestido Florido",
    price: 119.9,
    quant: 1,
    size: ["Único"],
    categories: ["vestido", "novidades"],
    image: [
      "media/roupas/vestFlor1.JPG",
      "media/roupas/vestFlor2.JPG",
      "media/roupas/vestFlor3.JPG",
    ],
    description: "🧣 Vestido florido longo, cor azul escuro.",
    descSize: "📐 Tamanho único, veste de P até M.",
  },
  {
    id: 22,
    name: "Calça Azul Pantalona",
    price: 74.9,
    quant: 1,
    size: ["Único"],
    categories: ["calcaSaia", "novidades"],
    image: ["media/roupas/calcaNewAzul.jpg"],
    description: "🧣 Calça pantalona na cor azul.",
    descSize: "📐 Tamanho único, veste de P até G.",
  },
  {
    id: 1,
    name: "Body Rosa",
    price: 39.9,
    quant: 1,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/bdChiclete.jpg"],
    description:
      "🧣 Canelado, duplo tecido no busto, 92% poliester, 8% elastano.",
    descSize: "📐 Cintura: 67cm, Busto: 71cm, Comprimento: 71cm",
  },
  {
    id: 5,
    name: "Cropped Cavado Preto",
    price: 22.9,
    quant: 1,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cavadoPreto1.jpg", "media/roupas/cavadoPreto2.jpg"],
    description:
      "🧣 Confeccionado em canelado duplo, sem bojo. Costas nuas com cordinha de amarração, cavado.",
    descSize: "📐 Busto: 27cm, Comprimento: 27cm",
  },
  {
    id: 8,
    name: "Cropped Trançado Branco",
    price: 43.9,
    quant: 2,
    size: ["M"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cpBranco.jpg"],
    description: "🧣 Confeccionado em suplex, sem bojo",
    descSize:
      "📐 Branco P = Busto: 69cm, Comprimento: 35cm; Branco M = Busto: 77cm, Comprimento: 38cm",
  },
  {
    id: 9,
    name: "Cropped Trançado Preto",
    price: 43.9,
    quant: 1,
    size: ["P"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cpPreto.jpg"],
    description: "🧣 Confeccionado em suplex, sem bojo",
    descSize: "📐 Busto: 69cm, Comprimento: 35cm",
  },
  {
    id: 10,
    name: "Cropped Longo Preto",
    price: 39.9,
    quant: 2,
    size: ["M", "G"],
    categories: ["bodyCropped"],
    image: ["media/roupas/longoPreto.jpg"],
    description: "🧣 Confeccionado em suplex, sem bojo.",
    descSize:
      "📐 Preto M = Busto: 75cm, Comprimento: 39cm, Gola: 30cm, Comp. manga: 58cm; Preto G =  Busto: 78cm, Comprimento: 40cm, Gola: 33cm, Comp. manga: 59cm",
  },
  {
    id: 11,
    name: "Calça Lisa Preta",
    price: 79.9,
    quant: 1,
    size: ["M"],
    categories: ["calcaSaia", "queridinhos"],
    image: ["media/roupas/calcaPreta.jpg"],
    description:
      "🧣 Tecido crepe, 90% poliéster, 10% elastano. Possui elástico atrás.",
    descSize:
      "📐 Cintura: 72cm, Quadril: 92cm, Cavalo: 34cm, Comprimento: 110cm",
  },
  {
    id: 18,
    name: "Cropped Pink Tricot",
    price: 59.9,
    quant: 0,
    size: ["Único"],
    categories: ["bodyCropped", "novidades"],
    image: ["media/roupas/cpRosa2.jpg", "media/roupas/cpRosa1.jpg"],
    description: "🧣 Cropped pink confeccionado em Tricot.",
    descSize: "📐 Tamanho único, veste de P até G.",
  },
  {
    id: 20,
    name: "Ciganinha Verde Neon",
    price: 59.9,
    quant: 0,
    size: ["M"],
    categories: ["bodyCropped", "novidades"],
    image: [
      "media/roupas/cpCigV1.JPG",
      "media/roupas/cpCigV2.JPG",
      "media/roupas/cpCigV3.JPG",
    ],
    description: "🧣 Cropped Ciganinha Marsala (Com bojo).",
    descSize: "📐 Tamanho M disponível.",
  },
  {
    id: 16,
    name: "Vestido Verde Tiffany",
    price: 119.9,
    quant: 0,
    size: ["Único"],
    categories: ["vestido", "novidades"],
    image: [
      "media/roupas/vestVerde1.JPG",
      "media/roupas/vestVerde2.JPG",
      "media/roupas/vestVerde3.JPG",
    ],
    description: "🧣 Vestido longo, cor verde tiffany.",
    descSize: "📐 Tamanho único, veste de P até G.",
  },
  {
    id: 21,
    name: "Calça Preta Pantalona",
    price: 74.9,
    quant: 0,
    size: ["Único"],
    categories: ["calcaSaia", "novidades"],
    image: [
      "media/roupas/calcaPretaNew1.jpg",
      "media/roupas/calcaPretaNew2.jpg",
    ],
    description: "🧣 Calça pantalona na cor preta.",
    descSize: "📐 Tamanho único, veste de M até G.",
  },
  {
    id: 2,
    name: "Body Bege",
    price: 39.9,
    quant: 0,
    size: ["M"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/roupas/bdRosado.jpg"],
    description:
      "🧣 Canelado, duplo tecido no busto, 92% poliester, 8% elastano.",
    descSize: "📐 Cintura: 71cm, Busto: 76cm, Comprimento: 68cm",
  },
  {
    id: 3,
    name: "Body Verde Esmeralda",
    price: 39.9,
    quant: 0,
    size: ["P"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/roupas/bdVerde.jpg"],
    description:
      "🧣 Canelado, duplo tecido no busto, 92% poliester, 8% elastano.",
    descSize: "📐 Cintura: 69cm, Busto: 69cm, Comprimento: 70cm",
  },
  {
    id: 4,
    name: "Body Preto",
    price: 39.9,
    quant: 0,
    size: ["G"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/roupas/bdPreto.jpg"],
    description:
      "🧣 Canelado, duplo tecido no busto, 92% poliester, 8% elastano.",
    descSize: "📐 Cintura: 77cm, Busto: 81cm, Comprimento: 73cm",
  },
  {
    id: 6,
    name: "Cropped Cavado Vermelho",
    price: 22.9,
    quant: 0,
    size: ["P"],
    categories: ["bodyCropped"],
    image: ["media/roupas/cavadoVermelho.jpg"],
    description:
      "🧣 Confeccionado em canelado duplo, sem bojo. Costas nuas com cordinha de amarração, cavado.",
    descSize: "📐 Busto: 24cm, Comprimento: 26cm",
  },
  {
    id: 7,
    name: "Cropped Regata Preto",
    price: 26.9,
    quant: 0,
    size: ["M"],
    categories: ["bodyCropped", "queridinhos"],
    image: ["media/roupas/cpReg.jpg"],
    description: "🧣 Confeccionado em canelado macio, básico.",
    descSize:
      "📐 Preto P = Busto: 66cm, Comprimento: 38cm; Preto M =  Busto: 72cm, Comprimento: 41cm",
  },
  {
    id: 12,
    name: "Vestido Curto Com Fenda",
    price: 49.9,
    quant: 0,
    size: ["P"],
    categories: ["vestido"],
    image: ["media/roupas/vtCurto3.jpg", "media/roupas/vtCurto2.jpg"],
    description:
      "🧣 Confeccionado em suplex, curto, com fenda lateral na coxa. Sem bojo",
    descSize: "📐 Cintura: 63cm, Busto: 57cm, Comprimento: 74cm",
  },
  {
    id: 13,
    name: "Calça Lisa Bege",
    price: 79.9,
    quant: 0,
    size: ["P"],
    categories: ["calcaSaia", "queridinhos"],
    image: ["media/roupas/calcaBege1.jpg", "media/roupas/calcaBege2.jpg"],
    description:
      "🧣 Tecido crepe, 90% poliéster, 10% elastano. Possui elástico atrás.",
    descSize:
      "📐 Cintura: 66cm, Quadril: 92cm, Cavalo: 33cm, Comprimento: 108cm",
  },
  {
    id: 14,
    name: "Saia Rosa",
    price: 46.9,
    quant: 0,
    size: ["P"],
    categories: ["calcaSaia"],
    image: ["media/roupas/saia.jpg"],
    description:
      "🧣 Tecido crepe, 90% poliéster, 10% elastano. Com zíper atrás.",
    descSize: "📐 Cintura: 72cm, Quadril: 92cm, Comprimento: 39cm",
  },
];

/* Novidades */
const novidades = products.filter((product) =>
  product.categories.includes("novidades")
);

/* Queridinhos */
const queridinhos = products.filter((product) =>
  product.categories.includes("queridinhos")
);

/* Body / Cropped */
const bodyCropped = products.filter((product) =>
  product.categories.includes("bodyCropped")
);

/* Calça / Saia */
const calcaSaia = products.filter((product) =>
  product.categories.includes("calcaSaia")
);

/* Vestidos */
const vestido = products.filter((product) =>
  product.categories.includes("vestido")
);

function App() {
  const [cartShop, setCartShop] = useState([]);
  const countCart = cartShop.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [error, setError] = useState(false);
  const [prod, setProd] = useState();
  const [prods, setProds] = useState(products);
  const [isOpenHamb, setOpenHamb] = useState(false);
  const [name, setName] = useState("");

  /* Adiciona item no carrinho de compras */
  function addItem(item, numSize) {
    if (numSize !== "") {
      const nArray = [...cartShop];
      const nIndex = nArray.findIndex(
        (product) => product.id == item.id && product.size == numSize
      );
      if (nIndex >= 0) {
        nArray[nIndex].price += nArray[nIndex].price / nArray[nIndex].count;
        nArray[nIndex].count += 1;
        setCartShop(nArray);
      } else {
        setCartShop([
          ...nArray,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            size: numSize,
            image: item.image,
            count: 1,
          },
        ]);
      }
    }
  }

  /* Remove item no carrinho de compras */
  function removeItem(item, numSize) {
    const nArray = [...cartShop];
    const nIndex = nArray.findIndex(
      (product) => product.id == item.id && product.size == numSize
    );
    if (nIndex >= 0) {
      nArray[nIndex].price -= nArray[nIndex].price / nArray[nIndex].count;
      nArray[nIndex].count -= 1;
    }
    if (item.count === 0) {
      nArray.splice(nIndex, 1);
    }
    setCartShop(nArray);
  }

  /* Alerta de adição de itens no carrinho */
  const showAlert = (numSize) => {
    if (numSize !== "") {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
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
    setName(valueSearch);
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
          <Link className="filterLink" to="/">
            Todos os produtos
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

        <Popover.Root>
          <Popover.Trigger className="hamburguer">
            <Hamburger toggled={isOpenHamb} toggle={setOpenHamb} color="#fff" />
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="PopoverContent">
              <Popover.Close className="filterClose" aria-label="Close">
                <h3 className="filterTitle">Categorias</h3>
                <div className="filter1">
                  <Link to="/" className="filterEsc">
                    ● Todos os produtos
                  </Link>
                  <Link to="/body-cropped" className="filterEsc">
                    ● Body / Cropped
                  </Link>
                  <Link to="/calças-saias" className="filterEsc">
                    ● Calças / Saias
                  </Link>
                  <Link to="/vestidos" className="filterEsc">
                    ● Vestidos
                  </Link>
                </div>
              </Popover.Close>

              <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {prods.length === products.length && <Slide />}
                {name === "" ? (
                  <Product
                    products={prods}
                    addItem={addItem}
                    showAlert={showAlert}
                    handleClickOpen={handleClickOpen}
                    title="Todos os Produtos"
                  />
                ) : (
                  <Product
                    products={prods}
                    addItem={addItem}
                    showAlert={showAlert}
                    handleClickOpen={handleClickOpen}
                    title={"Resultado de busca para '" + name + "'"}
                  />
                )}
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
          <Route
            path="/novidades"
            element={
              <Product
                products={novidades}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Novidades"
              />
            }
          ></Route>
          <Route
            path="/queridinhos"
            element={
              <Product
                products={queridinhos}
                addItem={addItem}
                showAlert={showAlert}
                handleClickOpen={handleClickOpen}
                title="Queridinhos"
              />
            }
          ></Route>
        </Routes>

        {error && (
          <Alert className="alertAdd" variant="filled" severity="error">
            Informe um tamanho
          </Alert>
        )}

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
