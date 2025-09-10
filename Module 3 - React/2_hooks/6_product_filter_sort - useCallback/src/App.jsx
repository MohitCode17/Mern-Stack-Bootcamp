import { useCallback, useMemo, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const productsData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 50000) + 1000,
}));

const App = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    console.log("🔍 Filtering products...");

    return productsData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // useCallback -> Optimizes add-to-cart function
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🛍️ Apple Store</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded w-72 mb-4 text-white border"
      />

      {/* Product List */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
};

export default App;
