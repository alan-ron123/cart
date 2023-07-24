import React, { useEffect, useState } from "react";
import Card from "./components/card_details/Card";
import Cart from "./components/shopping_cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const App = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);

  function addCart(item) {
    setCart((pre) => {
      return [...pre, item];
    });
  }

  function handleRemove(item) {
    let remove = cart.filter((filter) => filter.id !== item.id);
    setCart(remove);
  }

  function deleteItem(item) {
    let del = products.filter((filter) => filter.id !== item.id);
    setProducts(del);
  }
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/")
      .then((res) => setProducts(res.data.products));
  }, []);

  return (
    <div className=" d-flex justify-content-between gap-5 p-5">
      <Cart
        products={products}
        onAdd={addCart}
        onRemove={handleRemove}
        cart={cart}
        del={deleteItem}
      />
      <Card products={products} />
    </div>
  );
};

export default App;
