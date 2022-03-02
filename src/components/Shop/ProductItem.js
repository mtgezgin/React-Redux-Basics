import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart-slicer";

const ProductItem = (props) => {
  const { product } = props;
  const { title, price, description } = product;
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(addItem(product));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addProductHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
