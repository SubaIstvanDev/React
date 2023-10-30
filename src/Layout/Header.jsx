import { Fragment } from "react";
import classes from "./Header.module.scss";
import img from "../assets/pizza.png";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.navbar}>
        <h1>BestPizza</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["header-img"]}>
        <img src={img} alt="A photo about a pizza" />
      </div>
    </Fragment>
  );
};

export default Header;
