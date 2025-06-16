import { useEffect, useState } from "react";
import axios from "axios";

const UserCart = () => {
  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const fetchCart = async () => {
    try {
      const res = await axios.get("https://more-server.onrender.com/Cart");
      console.log("API Response:", res.data);
      const data = res.data;
      if (Array.isArray(data)) {
        setCartItems(data);
      } else if (data && Array.isArray(data.items)) {
        setCartItems(data.items);
      } else {
        console.warn("Unexpected API response:", data);
        setCartItems([]);
      }
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };
  fetchCart();
}, []);

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`https://more-server.onrender.com/Cart/${itemId}`);
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Failed to remove item:", error);
      alert("Failed to remove item. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between border-b py-4"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.Product}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.Product}</h3>
                  <p className="text-green-600 text-sm">{item.Offer}</p>
                  <p className="text-sm text-gray-600">{item.Size}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold">
                ₹{item.price * (item.quantity || 1)}
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between font-medium">
              <span>Total Items:</span>
              <span>{cartItems.reduce((a, b) => a + (b.quantity || 1), 0)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total Price:</span>
              <span>
                ₹
                {cartItems.reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCart;