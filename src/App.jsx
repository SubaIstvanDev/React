import { useState } from "react";
import Header from "./Layout/Header";
import Pizzas from "./Meals/Pizzas";
import Cart from "./Cart/Cart";
import "./App.css";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCart = () => {
    setIsCartShown(true);
  };

  const hideCart = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCart} />}
      <Header onShowCart={showCart} />;
      <main>
        <Pizzas />
      </main>
    </CartProvider>
  );
}

export default App;
