import axios from "axios";
import { children, createContext, useContext, useState } from "react";

const CartContext = createContext()

export  const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([])
 const addToCart = async (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    let updatedCart;
    
    if(existing){
        updatedCart = cartItems.map((i) => 
         i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        );
    } else {
        updatedCart = [...cartItems, {...item, quantity: 1}];
    }

    setCartItems(updatedCart);

    try{
        await axios.post(`http://localhost:3001/Cart`,{cartItems : updatedCart});
    } catch(error){
        console.error('Failed to sync cart:', error)
    }
 }

 const removeFromCart = async (item) => {
  const updatedCart = cartItems.filter((apple) => apple !== item);
  setCartItems(updatedCart);

  try {
    await axios.post('/your-api-endpoint/cart', { cartItems: updatedCart });
  } catch (error) {
    console.error('Failed to sync cart:', error);
  }
};

return(
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
)
}


export const useCart =() =>{
    return useContext(CartContext )
}