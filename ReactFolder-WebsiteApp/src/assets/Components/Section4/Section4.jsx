import React from 'react'
import jackets from "../Section4/jackets.jpg"
import heart from "../Section4/heart.png"
import caps from "../Section4/caps.jpg"
import t_shirts from "../Section4/t_shirts.png"
import watches from "../Section4/watches.jpg"
import clothes from "../Section4/clothes.jpg"
import shopping_image from "../Section4/shopping_image.jpg"
import facebook_image from "../Section4/facebook_image.png"
import twitter_image from "../Section4/twitter_image.png"
import youtube_image from "../Section4/youtube_image.png"
import instagram_image from "../Section4/instagram_image.jpg"

import "./Section4.css"
const Section4 = () => {
  return (
    <div>
      <div className="container_section">
          <div className="heading_bar">
           <p> Best Selling Store </p>
          </div>




         <div className="divs_container">
           <div className="left_div">
            <div className="left_image">
              <img src={jackets} alt="jacket" />
            </div>
            <div className="lefttext_div">
              <p className="text_heading">Beli Beli Mall</p>
              <p className="text_para">Shop, Explore, Delight and</p>
              <p className="text_para">Experience Mall Magic</p>
            </div>
          </div>




          <div className="middle_div">
            <div className="middletop_div">
              <div className="profile_div">
                <div className="profile_image">
                    <img src={jackets} alt="jackets" />
                  <div className="premium_image">
                     <img src={heart} alt="heart" />
                  </div>  
                </div>  

                <div className="companyname_div">
                  <p className="companyname">Nike Sae Mall</p>
                  <p className="companyname_text">
                    "Just do it bro!"
                  </p>
                </div>
              </div>  



              <div className="middletop_images">
                <div className="middletop_leftimage">
                  <img src={t_shirts} alt="t_shirts" />
                  <p>Nike</p>
                </div>



                <div className="middletop_leftimage">
                  <img src={caps} alt="caps" />
                  <p>Nike</p>
                </div>




                <div className="middletop_leftimage">
                  <img src={watches} alt="watches" />
                  <p>Nike</p>
                </div>


              </div>



             


              






              
             
            </div>
            


             <div className="middlebottom_div">
              <div className="profile_div">
                <div className="profile_image">
                    <img src={jackets} alt="jackets" />
                  <div className="premium_image">
                     <img src={heart} alt="heart" />
                  </div>  
                </div>  

                <div className="companyname_div">
                  <p className="companyname">Nike Sae Mall</p>
                  <p className="companyname_text">
                    "Just do it bro!"
                  </p>
                </div>
              </div>  



              <div className="middlebottom_images">
                <div className="middlebottom_leftimage">
                  <img src={t_shirts} alt="t_shirts" />
                  <p>Nike</p>
                </div>



                <div className="middlebottom_leftimage">
                  <img src={caps} alt="caps" />
                  <p>Nike</p>
                </div>




                <div className="middlebottom_leftimage">
                  <img src={watches} alt="watches" />
                  <p>Nike</p>
                </div>


              </div>



             


              






              
             
            </div>











           
          </div>







          <div className="right_div">
            <div className="righttop_div">
              <div className="profile_div">
                <div className="profile_image">
                    <img src={jackets} alt="jackets" />
                  <div className="premium_image">
                     <img src={heart} alt="heart" />
                  </div>  
                </div>  

                <div className="companyname_div">
                  <p className="companyname">Nike Sae Mall</p>
                  <p className="companyname_text">
                    "Just do it bro!"
                  </p>
                </div>
              </div>  



              <div className="righttop_images">
                <div className="righttop_leftimage">
                  <img src={t_shirts} alt="t_shirts" />
                  <p>Nike</p>
                </div>



                <div className="righttop_leftimage">
                  <img src={caps} alt="caps" />
                  <p>Nike</p>
                </div>  




                <div className="righttop_leftimage">
                  <img src={watches} alt="watches" />
                  <p>Nike</p>
                </div>


              </div>


              
             
            </div>
            


             <div className="rightbottom_div">
              <div className="profile_div">
                <div className="profile_image">
                    <img src={jackets} alt="jackets" />
                  <div className="premium_image">
                     <img src={heart} alt="heart" />
                  </div>  
                </div>  

                <div className="companyname_div">
                  <p className="companyname">Nike Sae Mall</p>
                  <p className="companyname_text">
                    "Just do it bro!"
                  </p>
                </div>
              </div>  



              <div className="rightbottom_images">
                <div className="rightbottom_leftimage">
                  <img src={t_shirts} alt="t_shirts" />
                  <p>Nike</p>
                </div>



                <div className="rightbottom_leftimage">
                  <img src={caps} alt="caps" />
                  <p>Nike</p>
                </div>




                <div className="rightbottom_leftimage">
                  <img src={watches} alt="watches" />
                  <p>Nike</p>
                </div>


              </div>
              
             
            </div>

           
          </div>



         </div>

      </div>


      <div className="bgimage_divcontainer">
        <div className="bgimage_div">
          "Let's Shop Beyond Boundaries"
      </div>
      </div>






      

      <div className="info_div">
        <div className="socialmedia_div">
          <img src={shopping_image} alt="shopping_image" />
          <p>"Let's Shop Beyond Boundaries"</p>

          <div className="socialmedia_btns">
            <div className="socialmedia_btn">
                <img src={facebook_image} alt="facebook_image" />
            </div>
            <div className="socialmedia_btn">
              <img src={twitter_image} alt="twitter_image" />
            </div>
            <div className="socialmedia_btn">
              <img src={youtube_image} alt="youtube_image" />
            </div>
            <div className="socialmedia_btn">
              <img src={instagram_image} alt="instagram_image" />
            </div>
          </div>
        </div>







      <div className="info_list">
        <p className="infolist_text">Beli Beli</p>
        <p className="infolist_texts">About BeliBeli</p>
        <p className="infolist_texts">Career</p>
        <p className="infolist_texts">Mitra Blog</p>
        <p className="infolist_texts">B2B  Digital</p>
      </div>






      <div className="buy_btn">
        <p className="infolist_text">Buy</p>
        <p className="infolist_texts">Bill & Top Up</p>
        <p className="infolist_texts">BeliBeli COD</p>
        <p className="infolist_texts">Mitra Blog</p>
        <p className="infolist_texts">Promo</p>
      </div>







       <div className="sell_btn">
        <p className="infolist_text">Sell</p>
        <p className="infolist_texts">Sell Education Center</p>
        <p className="infolist_texts">Brand Index</p>
        <p className="infolist_texts">Register official Store</p>
      </div>







       <div className="guide_btn">
        <p className="infolist_text">Guide and Help</p>
        <p className="infolist_texts">BeliBeli Care</p>
        <p className="infolist_texts">Term and Condition</p>
        <p className="infolist_texts">Privacy</p>
        <p className="infolist_texts">Mitra</p>
      </div>



      </div>

      <div className="footer">
          <p>@2001-2023,BeliBeli.com</p>
      </div>





      





    </div>
  )
}

export default Section4
