const Cart = ({ cart }) => {
  console.log("🛒 Cart rendered");

  return (
    <div className="w-full max-w-3xl mt-8 p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Your Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul className="list-disc ml-6">
          {cart.map((item) => (
            <li key={item.id} className="mb-1">
              {item.name} —{" "}
              <span className="text-green-400">₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
