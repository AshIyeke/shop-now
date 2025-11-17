"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

/**
 * Custom hook to use the CartContext.
 */
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

/**
 * Provides cart state and functions to its children components.
 * Manages cart items, including adding, removing, and updating quantities.
 * Persists cart state to localStorage.
 */
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // On initial render, load the cart from localStorage.
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setCartItems([]);
    }
  }, []);

  // Whenever cartItems state changes, save it to localStorage.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * Adds a product to the cart. If the product already exists, it increases the quantity.
   * @param {object} product - The product to add.
   */
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  /**
   * Removes a product from the cart by its ID.
   * @param {string|number} productId - The ID of the product to remove.
   */
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  /**
   * Updates the quantity of a product in the cart.
   * @param {string|number} productId - The ID of the product to update.
   * @param {number} quantity - The new quantity. Must be 1 or greater.
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  /**
   * Calculates the total price of all items in the cart.
   * @returns {number} The total price.
   */
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  /**
   * Calculates the total number of items in the cart.
   * @returns {number} The total number of items.
   */
  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };
  // A simple count of total items for quick display.
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    cartCount,
    removeFromCart,
    updateQuantity,
    getTotal,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
