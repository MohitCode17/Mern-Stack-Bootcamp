import { useMemo, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const productsData = [
  { id: 1, name: "iPhone 15", price: 80000 },
  { id: 2, name: "MacBook Pro", price: 180000 },
  { id: 3, name: "AirPods Pro", price: 25000 },
  { id: 4, name: "Apple Watch", price: 45000 },
  { id: 5, name: "iPad Pro", price: 95000 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc | desc

  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return filtered;
  }, [searchTerm, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🛍️ Apple Store</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded w-72 mb-4 text-white border"
      />

      {/* Sort Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSortOrder("asc")}
          className={`px-4 py-2 rounded ${
            sortOrder === "asc" ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          Sort: Low → High
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className={`px-4 py-2 rounded ${
            sortOrder === "desc" ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          Sort: High → Low
        </button>
      </div>

      {/* Product List */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
