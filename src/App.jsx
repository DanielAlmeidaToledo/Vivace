import NavBar from './components/NavBar'
import Filter from './components/Filter'
import Slide from './components/Slide'
import Product from './components/Product'
import Footer from "./components/Footer";

import Alert from "@mui/material/Alert";

import { useState } from "react";

import "./App.css";

function App() {
  const [cartShop, setCartShop] = useState([]);
  const [countCart, setCountCart] = useState(cartShop.length);
  const [open, setOpen] = useState(false);

  /* Objeto com os produtos da loja */
  const product = [
    {
      id: 1,
      name: "blusa 1",
      price: 49.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/01/05/1641367718339de4f594d2bfe7dcf270b96dac6d73_thumbnail_600x.webp",
    },
    {
      id: 2,
      name: "blusa 2",
      price: 39.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2020/12/07/1607328597493fa40dc42c2a6462d3c92d7eec84e0_thumbnail_600x.webp",
    },
    {
      id: 3,
      name: "blusa 3",
      price: 55.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/05/17/1621259574b29fb7791e62f2bbdf3c2ebf16f4cb33_thumbnail_600x.webp",
    },
    {
      id: 4,
      name: "blusa 4",
      price: 29.9,
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/01/25/1611564678c060bb9869c797fde01577c945eb0cc8_thumbnail_600x.webp",
    },
    {
      id: 5,
      name: "blusa 5",
      price: 49.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/05/18/165286966766696d9c18f155c23c847fa8a817cdfd_thumbnail_600x.webp",
    },
    {
      id: 6,
      name: "blusa 6",
      price: 49.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/12/02/163842941336b65217db5a1acc6d27815e30c915d7_thumbnail_600x.webp",
    },
    {
      id: 7,
      name: "Top de malha - Simples ocasional 1",
      price: 29.0,
      image:
        "https://img.ltwebstatic.com/gspCenter/goodsImage/2022/10/16/8370285060_1030691/9EA50E6BEB8682979C60E0A09769C361_thumbnail_600x.jpg",
    },
    {
      id: 8,
      name: "Top de malha - Simples ocasional 2",
      price: 29.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/09/14/166314468772e894ee2e231d39c69a77084276bc4c_thumbnail_600x.webp",
    },
    {
      id: 9,
      name: "Top de malha - Simples ocasional 3",
      price: 29.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2021/11/16/16370480499bd450418598c5ad275f31b81847225b_thumbnail_600x.webp",
    },
    {
      id: 10,
      name: "Camiseta Listrado ocasional ",
      price: 29.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/04/06/1649236883a937b6e453c8329f2ad36e4511abfde9_thumbnail_600x.webp",
    },
    {
      id: 11,
      name: "Camiseta de Alface Borboleta ocasional",
      price: 29.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/04/19/1650333066429c7fdb0e727a237d5e486149b8a124_thumbnail_600x.webp",
    },
    {
      id: 12,
      name: " Camiseta de Alface Simples ocasional",
      price: 29.0,
      image:
        "https://img.ltwebstatic.com/images3_pi/2022/03/03/1646278057ebc92663cf841d3a66948e312d8a7f5f_thumbnail_600x.webp",
    },
  ];

  /* Adiciona item no carrinho de compras */
  function addItem(item) {
    setCountCart((countCart) => countCart + 1);
    let index = cartShop.findIndex((product) => product.id == item.id);
    if (index < 0) {
      cartShop.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        count: 1,
      });
    } else {
      cartShop[index].count++;
      cartShop[index].price += item.price;
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

  return (
    <div className="App">
      <NavBar
        cartShop={cartShop}
        quantidade={countCart}
        removeItem={removeItem}
      />
      <Filter />
      <Slide />
      <Product product={product} addItem={addItem} showAlert={showAlert} />
      {open && (
        <Alert className="alertAdd" variant="filled" severity="success">
          Produto adicionado no carrinho
        </Alert>
      )}
      <Footer />
    </div>
  );
}

export default App
