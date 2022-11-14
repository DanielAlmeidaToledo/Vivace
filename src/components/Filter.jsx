import './Filter.css'

// import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";

const Filter = () => {
  return (
    <div className="filter">
      {/* <BrowserRouter>
        <Routes>
          <Route component={App} path="/" />
        </Routes>
      </BrowserRouter> */}
      <a href="">Todos os Produtos</a>
      <a href="">Lançamentos</a>
      <a href="">Mais Vendidos</a>
      <a href="">Promoções</a>
    </div>
  );
};

export default Filter