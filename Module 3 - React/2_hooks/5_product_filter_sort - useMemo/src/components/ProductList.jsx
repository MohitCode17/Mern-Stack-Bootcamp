const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-green-400 font-bold">₹{product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No products found 🚫</p>
      )}
    </div>
  );
};

export default ProductList;
