import classes from "./pizzaItemForm.module.scss";
import { useRef, useState } from "react";

const PizzaItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor="amount">Amount:</label>
        <input
          ref={amountInputRef}
          id={props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>

      <button>+ Add</button>
      {!formIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default PizzaItemForm;
