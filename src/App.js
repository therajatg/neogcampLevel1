import "./styles.css";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <h1>Number of items in cart: {cartItems}</h1>
      {[1, 2, 3, , 4].map((item) => (
        <div className="App">
          <h1>Product {item}</h1>
          <button onClick={() => setCartItems(cartItems + 1)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}
