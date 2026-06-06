import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import styles from "./Orders.module.css"
import Footer from '../../Components/Footer/Footer'
const Orders = () => {


    const orders = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      size: "Large",
      price: "1200 PKR",
      status: "Delivered"
    },
    {
      id: 2,
      name: "Chicken Pizza",
      size: "Medium",
      price: "900 PKR",
      status: "On the way"
    }
  ]


  return (
    <div>
        <Navbar/>

        <div className={styles.orders_container}>
            <p>Your Orders 🍕</p>
            <p>Track your delicious pizzas here</p>
        </div>

        <div className={styles.orders_divs}>

        {
            orders.length == 0 ? (
                <div className={styles.empty}>
                    <p>No Orders yet 🍕</p>
                </div>
            ) : 
            (
                orders.map((order, ind) => (
                 <div key={order.id} className={styles.orders_card}>
                    <div className={styles.orders_info}>
                        <p className={styles.orders_name}>{order.name}</p>
                        <p>Size: {order.size}</p>
                        <p>Price: {order.price}</p>
                    </div>


                    <div className={styles.orders_status}>
                        <span>{order.status}</span>
                    </div>

                 </div>
                    
                ))
            )
        }
            
        </div>

        <Footer/>
      
    </div>
  )
}

export default Orders
