import React from 'react'
import styles from "./CustomerSays.module.css"
const CustomerSays = () => {
  return (
    <div>

        <div className={styles.heading_box}>
            <p>What our Customers Says <span>🍕</span></p>
            <p>"Fresh taste, fats delivery and trusted by many"</p>
        </div>


        <div className={styles.container_box}>
            <div className={styles.tasty_box}>

                <div className={styles.box_heading}>
                    <p>What Customers Says</p>
                </div>


              

                <div className={styles.box_main}>
                    <p>Pizzas are very delicious very good 
                        first expreience with there pizzas.
                    </p>
                </div>



                <div className={styles.box_rating}>
                    <span>⭐⭐⭐⭐⭐ </span>
                    <p>Amazing Taste!</p>
                </div>  




                 <div className={styles.user_info}>
                    <div className={styles.infoname_div}>
                        <div className={styles.infoname_image}>
                         👤
                        </div>
                        <div className={styles.infoname_text}>
                            <p>Khizer</p>
                        </div>
                    </div>

                      <div className={styles.location_div}>
                        <div className={styles.location_image}>
                         📍
                        </div>
                        <div className={styles.location_text}>
                            <p>Lahore</p>
                        </div>
                    </div>


                      
                 </div>


            </div>




            <div className={styles.delivery_box}>
                 <div className={styles.box_heading}>
                    <p>What Customers Says</p>
                </div>


              

                <div className={styles.box_main}>
                    <p>Pizzas are delivered in very short time
                        with fresh ingredients.
                    </p>
                </div>



                <div className={styles.box_rating}>
                    <span>⭐⭐⭐⭐⭐ </span>
                    <p>Fats Delivery!</p>
                </div>  




                 <div className={styles.user_info}>
                    <div className={styles.infoname_div}>
                        <div className={styles.infoname_image}>
                         👤
                        </div>
                        <div className={styles.infoname_text}>
                            <p>Faraz</p>
                        </div>
                    </div>

                      <div className={styles.location_div}>
                        <div className={styles.location_image}>
                         📍
                        </div>
                        <div className={styles.location_text}>
                            <p>Lahore</p>
                        </div>
                    </div>


                      
                 </div>
            </div>




            <div className={styles.goodprice_box}>
                 <div className={styles.box_heading}>
                    <p>What Customers Says</p>
                </div>


              

                <div className={styles.box_main}>
                    <p>Pizzas are available 24/7 with good
                        pricing list.
                    </p>
                </div>



                <div className={styles.box_rating}>
                    <span>⭐⭐⭐⭐⭐ </span>
                    <p>Price Manageable!</p>
                </div>  




                 <div className={styles.user_info}>
                    <div className={styles.infoname_div}>
                        <div className={styles.infoname_image}>
                         👤
                        </div>
                        <div className={styles.infoname_text}>
                            <p>Waleed</p>
                        </div>
                    </div>

                      <div className={styles.location_div}>
                        <div className={styles.location_image}>
                         📍
                        </div>
                        <div className={styles.location_text}>
                            <p>Lahore</p>
                        </div>
                    </div>


                      
                 </div>
            </div>





        </div>
      
    </div>
  )
}

export default CustomerSays
