import React, { useState } from "react";
import CartControls from "./components/CartControls/CartControls";
import CartStatistics from "./components/CartStatistics/CartStatistics";
import CartSummary from "./components/CartSummary/CartSummary";

const App = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [actionsCount, setActionsCount] = useState(0);
  const addItem = () => {
    setTotalPrice((prevState) => prevState + 100);
    setItemsCount((prevState) => prevState + 1);
  };
  const removeItem = () => {
    setTotalPrice((prevState) => (prevState >= 100 ? prevState - 100 : 0));
    setItemsCount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };
  const clearCart = () => {
    setTotalPrice(0);
    setItemsCount(0);
  };
  const setItem = (e) => {
    setTotalPrice(Number(e.target.value));
  };
  const liftingActionsCount = (value) => {
    setActionsCount(value);
  };
  return (
    <>
      <CartSummary itemsCount={itemsCount} totalPrice={totalPrice} />
      <CartControls
        addItem={addItem}
        removeItem={removeItem}
        clearCart={clearCart}
        setItem={setItem}
        liftingActionsCount={liftingActionsCount}
      />
      <CartStatistics actionsCount={actionsCount} />
    </>
  );
};

export default App;
