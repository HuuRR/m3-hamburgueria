import "./style.css";
function Cart({ currentSale, setCurrentSale }) {
  function removeProduct(idElem) {
    const remove = currentSale.filter((elem) => {
      return elem.id !== idElem;
    });
    setCurrentSale(remove);
  }
  return currentSale.length > 0 ? (
    currentSale.map((elem) => (
      <li className="item--cart" key={elem.id}>
        <div className="img--infos">
          <img className="img--cart" src={elem.img} alt={elem.name}></img>
          <div className="name--category">
            <p className="name--cart">{elem.name}</p>
            <p className="category--cart">{elem.category}</p>
          </div>
        </div>
        <span className="button--remove" onClick={() => removeProduct(elem.id)}>
          Remover
        </span>
      </li>
    ))
  ) : (
    <div className="container--vazio">
      <p className="msg--container--vazio">Seu carrinho está vazio :(</p>
    </div>
  );
}

export default Cart;
