import classes from "./AvaiblePizzas.module.scss";
import Card from "../UI/Card";
import PizzaItem from "./PizzaItems/PizzaItem";

const PIZZA_LIST = [
  {
    id: "p1",
    name: "Margareta",
    descripton: "tomato sauce, Mozzarella",
    price: 12.99,
  },
  {
    id: "p2",
    name: "Salami",
    descripton: "tomato sauce, Mozzarella and Salami",
    price: 14.5,
  },
  {
    id: "p3",
    name: "Songoku",
    descripton: "tomato sauce, Mozzarella, Ham, Corn and Mushroom",
    price: 15.88,
  },
  {
    id: "p4",
    name: "prosciutto",
    descripton: "tomato sauce, Mozzarella and Ham",
    price: 13.23,
  },
];

const AvaiblePizza = () => {
  const pizzaList = PIZZA_LIST.map((pizza) => (
    <PizzaItem
      id={pizza.id}
      key={pizza.id}
      name={pizza.name}
      description={pizza.descripton}
      price={pizza.price}
    />
  ));

  return (
    <section className={classes.pizzas}>
      <Card>
        <ul>{pizzaList}</ul>
      </Card>
    </section>
  );
};

export default AvaiblePizza;
