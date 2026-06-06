import React, { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./Cart.module.css";
import { CartContext } from '../CartContext/CartContext'

const Cart = () => {

  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div>

      <Navbar />

      <div className={styles.cart_page}>
        <h1 className={styles.title}>Your Cart 🛒</h1>

        <div className={styles.cart_container}>

          <div className={styles.items_section}>

            {cart.length === 0 ? (
              <p className={styles.empty}>Cart is empty 😢</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className={styles.cart_item}>

                  <img src={item.image} alt={item.name} />

                  <div className={styles.item_info}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>

                    <div className={styles.qty_box}>
                      <button onClick={() => updateQty(item.id, "dec")}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, "inc")}>+</button>
                    </div>

                    <button
                      className={styles.remove_btn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))
            )}

          </div>

          <div className={styles.bill_section}>
            <h2>Bill Summary</h2>

            <p>Total Items: {cart.length}</p>
            <p>Total Price: ${total.toFixed(2)}</p>

            <button className={styles.checkout_btn}>
              Checkout
            </button>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Cart;