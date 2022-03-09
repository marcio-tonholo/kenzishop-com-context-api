import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...Cart, item]);
  };

  const removeFromCart = (item) => {
    const ItemIndex = Cart.findIndex((itemOnCart) => itemOnCart.id === item);
    const list = [...Cart];
    list.splice(ItemIndex, 1);
    setCart(list);
  };

  return (
    <CartContext.Provider value={{ Cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
