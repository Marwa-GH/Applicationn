
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.image} alt={item.title} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.title}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;