import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cart-slicer";

const CartItem = (props) => {
  const { item } = props;
  const { title, price, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const removeProductHandler = () => {
    dispatch(removeItem(item));
  };

  const addProductHandler = () => {
    dispatch(addItem(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProductHandler}>-</button>
          <button onClick={addProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
