import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/header";
import ProductList from "./components/ProductList";
import Api from "./data/api";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [value, setValue] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    Api.get().then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    setCartTotal(
      currentSale.reduce((acc, atual) => {
        return Number(acc) + Number(atual.price);
      }, 0)
    );
  }, [currentSale]);

  const showProducts = (value) => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleClick = (idProduto) => {
    if (currentSale.find((elem) => elem.id === idProduto)) {
    } else {
      setCurrentSale([
        ...currentSale,
        products.find((elem) => elem.id === idProduto),
      ]);
    }
  };

  function cleanCart() {
    setCurrentSale([]);
  }

  return (
    <div className="App">
      <Header setValue={setValue} value={value} showProducts={showProducts} />
      <header className="App-header">
        <ProductList
          products={filteredProducts.length === 0 ? products : filteredProducts}
          handleClick={handleClick}
        />
        <div className="container--cart">
          <p className="title--cart">CARRINHO DE COMPRAS</p>
          <div className="infos--cart">
            <ul className="list--cart">
              <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
            </ul>
            <div className="hr--cart"></div>
            <div className="rodape--cart">
              <div className="total--cart">
                <span className="total">TOTAL</span>{" "}
                <span className="preco">R$ {cartTotal.toFixed(2)}</span>
              </div>
              <button className="clean--cart" onClick={() => cleanCart()}>
                REMOVER TODOS
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
