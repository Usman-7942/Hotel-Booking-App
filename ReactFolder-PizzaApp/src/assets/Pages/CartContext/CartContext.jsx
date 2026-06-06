import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // 🔄 load user on refresh
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (savedUser) {
      setUser(savedUser);
      setCart(savedUser.cart || []);
    }
  }, []);

  // 💾 sync with localStorage
  const syncStorage = (updatedCart) => {
    if (!user) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((u) =>
      u.email === user.email ? { ...u, cart: updatedCart } : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const updatedCurrentUser = { ...user, cart: updatedCart };
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    setUser(updatedCurrentUser);
  };

  // ➕ ADD TO CART
  const addToCart = (pizza) => {
    const exists = cart.find((item) => item.id === pizza.id);

    let updatedCart;

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...pizza, qty: 1 }];
    }

    setCart(updatedCart);
    syncStorage(updatedCart);
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    syncStorage(updatedCart);
  };

  // ➖➕ QTY
  const updateQty = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: type === "inc"
            ? item.qty + 1
            : Math.max(item.qty - 1, 1),
        };
      }
      return item;
    });

    setCart(updatedCart);
    syncStorage(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        cart,
        addToCart,
        removeFromCart,
        updateQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};