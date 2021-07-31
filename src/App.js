import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartVisible = () => {
    setCartVisible(true);
  };

  const hideCartVisible = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onHideCart={hideCartVisible} />}
      <Header onShowCart={showCartVisible} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
