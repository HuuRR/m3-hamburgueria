import "./style.css";
function Product({ item, handleClick }) {
  return (
    <div className="card">
      <div className="img--card">
        <img className="img" src={item.img} alt={item.name} />
      </div>
      <div className="infos-card">
        <h3 className="title">{item.name}</h3>
        <span className="cat">{item.category}</span>
        <span className="price">R$ {item.price.toFixed(2)}</span>
        <button className="add-cart" onClick={() => handleClick(item.id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Product;
