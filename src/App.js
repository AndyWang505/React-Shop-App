import { act, useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext, cartInit, cartRuducer } from "./store";


function App() {
  const reducer = useReducer(cartRuducer, cartInit)

  return (
    <CartContext.Provider value={reducer}>
      <Navbar></Navbar>
      <div className="container mt-4">
        {/* 外層格線 總和12 */}
        <div className="row">
          <div className="col-md-7">
            {/* 內層格線 */}
            <Products></Products>
          </div>
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;