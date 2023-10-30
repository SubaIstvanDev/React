import AvaiblePizzas from "./AvailabePizzas";
import PizzaDescription from "./PizzaDescription";
import { Fragment } from "react";

const Pizzas = () => {
  return (
    <Fragment>
      <PizzaDescription />
      <AvaiblePizzas />
    </Fragment>
  );
};
export default Pizzas;
