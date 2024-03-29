import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "./types";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  decreaseProductQuantity: (productId: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem("cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return parsedCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productToAdd: Product) => {
    setCart((currentCart) => {
      const productIndex = currentCart.findIndex((p) => p.id === productToAdd.id);
      if (productIndex !== -1) {
        const newCart = [...currentCart];
        const currentQuantity = newCart[productIndex].quantity ?? 0;
        newCart[productIndex] = {
          ...newCart[productIndex],
          quantity: currentQuantity + 1,
        };

        return newCart;
      } else {
        return [...currentCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  const increaseProductQuantity = (productId: number) => {
    setCart((currentCart) => {
      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
      );
    });
  };

  const decreaseProductQuantity = (productId: number) => {
    setCart((currentCart) => {
      return currentCart
        .map((item) =>
          item.id === productId && (item.quantity ?? 1) > 1
            ? { ...item, quantity: (item.quantity ?? 1) - 1 }
            : item
        )
        .filter((item) => item.quantity !== 0);
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseProductQuantity, decreaseProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
