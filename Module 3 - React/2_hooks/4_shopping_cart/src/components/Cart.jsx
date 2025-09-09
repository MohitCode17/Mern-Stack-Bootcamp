const Cart = ({ cart, dispatch }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <p>
                {item.name} x {item.quantity} = ₹{item.price * item.quantity}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE_QTY", payload: item.id })
                  }
                  className="bg-gray-600 hover:bg-gray-700 px-2 rounded"
                >
                  -
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE_QTY", payload: item.id })
                  }
                  className="bg-gray-600 hover:bg-gray-700 px-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="bg-red-600 hover:bg-red-700 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="text-lg font-semibold mt-4">Total: ₹{total}</h3>

          <button
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="bg-red-700 hover:bg-red-800 px-4 py-2 mt-4 rounded"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
