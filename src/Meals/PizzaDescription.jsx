import classes from "./PizzaDescription.module.scss";

const PizzaDescription = () => {
  return (
    <section className={classes.description}>
      <h2>The Best Pizza, Delivered To You</h2>
      <p>
        Choose your favourite pizza from our menu and enjoy a delicious lunch or
        dinner at home. Your order will arrive within 1 Hour.
      </p>
      <p>
        All our pizzas are made with high-quality ingredients, just in time and
        of course by experienced chefs! Choose from our thick, thin and
        traditional crust pizzas.
      </p>
    </section>
  );
};

export default PizzaDescription;
