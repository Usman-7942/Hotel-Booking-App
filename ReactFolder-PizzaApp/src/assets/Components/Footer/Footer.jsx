import React from 'react'
import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
        <footer>

            <div className={styles.upper_div}>

                <div className={styles.pizza_div}>
                    <div className={styles.heading}>
                        <p>Pizza App</p>
                        <span>🍕</span>
                    </div>
                    <div className={styles.main}>
                        <span>🍕</span>
                    </div>
                </div>


                

                <div className={styles.link_div}>
                    <div className={styles.heading}>
                        <p>Links</p>
                    </div>
                    <div className={styles.main}>
                       <button>Home</button>
                       <button>Menu</button>
                       <button>Deals</button>
                       <button>About</button>
                    </div>
                </div>




                <div className={styles.contact_div}>
                    <div className={styles.heading}>
                        <p>Contacts</p>
                    </div>
                    <div className={styles.main}>
                      <div className={styles.common_div}> 
                        <div className={styles.commonimage}>📍</div>
                        <div className={styles.commontext}>Sheikhupura</div>
                      </div>

                       <div className={styles.common_div}> 
                        <div className={styles.commonimage}>📞</div>
                        <div className={styles.commontext}>+92-XXXX-XXXXXX</div>
                      </div>

                       <div className={styles.common_div}> 
                        <div className={styles.commonimage}>✉️</div>
                        <div className={styles.commontext}>support@pizza.com</div>
                      </div>
                       
                    </div>
                </div>


                <div className={styles.social_div}>
                      <div className={styles.heading}>
                        <p>Socials</p>
                    </div>
                    <div className={styles.main}>
                      <div className={styles.common_div}> 
                        <div className={styles.commonimage}><FaFacebook /></div>
                        <div className={styles.commontext}>Facebook</div>
                      </div>

                       <div className={styles.common_div}> 
                        <div className={styles.commonimage}><FaXTwitter /></div>
                        <div className={styles.commontext}>Twitter</div>
                      </div>

                       <div className={styles.common_div}> 
                        <div className={styles.commonimage}><FaInstagram /></div>
                        <div className={styles.commontext}>Instagram</div>
                      </div>


                       <div className={styles.common_div}> 
                        <div className={styles.commonimage}><FaTiktok /></div>
                        <div className={styles.commontext}>TikTok</div>
                      </div>
                       
                    </div>
                </div>


    



            </div>



            <div className={styles.bottom_div}>
                <p>@ 2026 Pizza App | All rights Reserved</p>
            </div>


        </footer>
      
    </div>
  )
}

export default Footer
