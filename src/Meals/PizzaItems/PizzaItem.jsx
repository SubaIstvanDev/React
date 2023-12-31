import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./PizzaItem.module.scss";
import PizzaItemForm from "./PizzaItemForm";

const PizzaItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.pizzas}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <PizzaItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default PizzaItem;
