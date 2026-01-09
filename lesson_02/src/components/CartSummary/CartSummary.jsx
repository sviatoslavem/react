import React from "react";

const CartSummary = ({ itemsCount, totalPrice }) => {
  return (
    <div className="CartSummary">
      <h3>itemsCount: {itemsCount}</h3>
      <h3>totalPrice: {totalPrice}</h3>
    </div>
  );
};

export default CartSummary;
