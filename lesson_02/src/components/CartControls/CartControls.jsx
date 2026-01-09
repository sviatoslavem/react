import React, { useState, useEffect } from "react";

const CartControls = ({
  addItem,
  removeItem,
  clearCart,
  setItem,
  liftingActionsCount,
}) => {
  const [actionsCount, setActionsCount] = useState(0);
  const handleAddItem = () => {
    addItem();
    setActionsCount((prevState) => prevState + 1);
  };
  const handleRemoveItem = () => {
    removeItem();
    setActionsCount((prevState) => prevState + 1);
  };
  const handleClearCart = () => {
    clearCart();
    setActionsCount((prevState) => prevState + 1);
  };
  const handleSetItem = (e) => {
    e.target.value && setItem(e);
    setActionsCount((prevState) => prevState + 1);
  };
  useEffect(() => {
    liftingActionsCount(actionsCount);
  }, [actionsCount, liftingActionsCount]);

  return (
    <div className="CartControls">
      <button onClick={handleAddItem}>Add item</button>
      <button onClick={handleRemoveItem}>Remove item</button>
      <button onClick={handleClearCart}>Clear cart</button>
      <input type="number" onBlur={handleSetItem}></input>
    </div>
  );
};

export default CartControls;
