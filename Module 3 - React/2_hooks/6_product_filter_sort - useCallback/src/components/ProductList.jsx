import React from "react";

const ProductList = React.memo(({ products, addToCart }) => {
  console.log("📦 ProductList rendered");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition"
        >
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-green-400 font-bold">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
});

export default ProductList;
