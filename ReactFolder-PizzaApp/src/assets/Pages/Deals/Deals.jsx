import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Deals.module.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import { useContext } from "react";
import { CartContext } from "../../Pages/CartContext/CartContext";
const Deals = () => {

  const navigate = useNavigate();


  const [smallcheck, setsmallcheck] = useState({status:"", order: null});
  const [mediumcheck, setmediumcheck] = useState({status:"", order: null});
  const [largecheck, setlargecheck] = useState({status:"", order: null});


  const { addToCart } = useContext(CartContext);
  

  return (
    <div>
      <Navbar/>


      <div className={styles.deals_container}>
              <p>Hot Deals! </p>
              <p>Grab the best offers before they end</p>
      </div>


      <div className={styles.deals_div}>

          <div className={styles.deal_medium}>
            <p>Buy 1 Get 1 Free</p>
            <p>On all medium Pizzas</p>


             {
              mediumcheck.status == "medium"  && mediumcheck.order != true && (
                  <div className={styles.deals_result}>
                    <p>Confirm Your Order:</p>

                     <button className={styles.deals_yes}
                    onClick={() => {
                      addToCart(pcard); 
                      setmediumcheck({...mediumcheck,order: true});}}
                    >
                      Yes
                    </button>

                    <button className={styles.deals_no}
                     onClick={() => setmediumcheck({...mediumcheck,order: false})}
                    >
                      No
                    </button>

                  </div>
              )
            }

            {
              mediumcheck.status == "medium" && mediumcheck.order == true && (
                <div className={styles.deals_result}>
                    <p>Order is added to the Cart</p>
                </div>
              )
            }

             {
              mediumcheck.status == "medium" && mediumcheck.order == false && (
                <div className={styles.deals_result}>
                    <p>Order is not added to the Cart</p>
                </div>
              )
            }

            <button className={styles.deals_orderbtn}
            onClick={() => setmediumcheck({...mediumcheck,status: "medium"})}
            >Order Now</button>
          </div>





          <div className={styles.deal_large}>
            <p>Family Combo</p>
            <p>2 Large Pizzas + Drink</p>

             {
              largecheck.status == "large" &&  largecheck.order != true && (
                  <div className={styles.deals_result}>
                    <p>Confirm Your Order:</p>

                    <button className={styles.deals_yes}
                    onClick={() => {
                      addToCart(pcard); 
                      setlargecheck({...largecheck,order: true});}}
                    >
                      Yes
                    </button>

                    <button className={styles.deals_no}
                    onClick={() => setlargecheck({...largecheck,order: false})}
                    >
                      No
                    </button>
                  </div>
              )
            }

            {
              largecheck.status == "large" && largecheck.order == true && (
                <div className={styles.deals_result}>
                    <p>Order is added to the Cart</p>
                </div>
              )
            }

             {
              largecheck.status == "large" && largecheck.order == false && (
                <div className={styles.deals_result}>
                    <p>Order is not added to the Cart</p>
                </div>
              )
            }

            <button className={styles.deals_orderbtn}
            onClick={() => setlargecheck({...largecheck,status: "large"})}>
              Order Now</button>
          </div>



          <div className={styles.deal_small}>
            <p>Weekend Special</p>
            <p>20% off all Orders</p>

             {
              smallcheck.status == "small" &&  smallcheck.order != true &&(
                  <div className={styles.deals_result}>
                    <p>Confirm Your Order:</p>

                    <button className={styles.deals_yes}
                    onClick={() => {
                      addToCart(pcard); 
                      setsmallcheck({...smallcheck,order: true});}}
                    >
                      Yes
                    </button>

                    <button className={styles.deals_no}
                     onClick={() => setsmallcheck({...smallcheck,order: false})}
                    >
                      No
                    </button>
                  </div>
              )
            }

            {
              smallcheck.status == "small" && smallcheck.order == true && (
                <div className={styles.deals_result}>
                    <p>Order is added to the Cart</p>
                </div>
              )
            }

             {
              smallcheck.status == "small" && smallcheck.order == false && (
                <div className={styles.deals_result}>
                    <p>Order is not added to the Cart</p>
                </div>
              )
            }

            <button className={styles.deals_orderbtn}
            onClick={() => setsmallcheck({...smallcheck,status: "small"})}>
              Order Now</button>
          </div>



         

           
          



      </div>

      <Footer/>      
    </div>

  )
}

export default Deals
