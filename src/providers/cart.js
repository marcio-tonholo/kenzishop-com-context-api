import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const defaultState =
    JSON.parse(localStorage.getItem("@kenzieShopContext/Cart:")) || [];
  const [cart, setCart] = useState(defaultState);
  const addToCart = (item) => {
    setCart([...cart, item]);
    if (cart.length == 0) {
      localStorage.setItem("@kenzieShopContext/Cart:", JSON.stringify(item));
    } else {
      localStorage.setItem(
        "@kenzieShopContext/Cart:",
        JSON.stringify([...cart, item])
      );
    }
  };

  const removeFromCart = (item) => {
    const ItemIndex = cart.findIndex((itemOnCart) => itemOnCart.id === item);
    const list = [...cart];
    list.splice(ItemIndex, 1);
    setCart(list);
    localStorage.setItem("@kenzieShopContext/Cart:", JSON.stringify(list));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
