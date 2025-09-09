const ProductList = ({ products, dispatch }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center mb-3"
        >
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
