import React from "react";
import CartItems from "./Cart_items";

const Cart = ({ products, onAdd, onRemove, cart, del }) => {
  return (
    <div className="flex-grow-1">
      <h4>
        <strong>Shopping Continue</strong>
      </h4>
      <hr></hr>
      <h5>
        <strong>Shopping Cart</strong>
      </h5>
      <p>You have {cart.length} items in your cart</p>
      <>
        <CartItems
          products={products}
          onAdd={onAdd}
          onRemove={onRemove}
          cart={cart}
          del={del}
        />
      </>
    </div>
  );
};

export default Cart;
