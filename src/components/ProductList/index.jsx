import Product from "../Product";
import "./style.css";

function ProductList({ products, handleClick }) {
  return (
    <ul className="container--card">
      {products.map((item) => (
        <Product item={item} key={item.id} handleClick={handleClick} />
      ))}
    </ul>
  );
}

export default ProductList;
