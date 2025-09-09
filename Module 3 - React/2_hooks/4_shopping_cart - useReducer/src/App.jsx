import { useReducer } from "react";
import "./App.css";
import { cartReducer, initialState } from "./reducers/cartReducer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Product List */}
        <ProductList products={state.products} dispatch={dispatch} />

        {/* Cart */}
        <Cart cart={state.cart} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;
