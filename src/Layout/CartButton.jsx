import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.scss";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const amountOfPizzas = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{amountOfPizzas}</span>
    </button>
  );
};

export default CartButton;
