import React,{ useState } from 'react'
import flash_image from "../Section3/flash_image.png";
import jackets from "../Section3/jackets.jpg"
import caps from "../Section3/caps.jpg"
import bags_image from "../Section3/bags_image.jpg"
import shoes from "../Section3/shoes.png"
import t_shirts from "../Section3/t_shirts.png"
import watches from "../Section3/watches.jpg"
import heart from "../Section3/heart.png"
import "./Section3.css"
const Section3 = () => {

  const [status, setstatus] = useState("");


  return (
    <div>
        <div className="box">
            <div className="boxtop_bar">
              <div className="sales_btn">
                <p className="sales_text">
                    Today For You!
                </p>
              </div>
            




            <div className="btns_box">
                <button className="btns"
                onClick={ () => setstatus("bs")}
                >
                    Best Seller
                </button>

                <button className="btns"
                onClick={ () => setstatus("ks")}
                >
                    Keep Stylish
                </button>


                 <button className="btns"
                 onClick={() => setstatus("sd")}
                 >
                    Special Discount
                </button>


                 <button className="btns"
                 onClick={() => setstatus("os")}
                 >
                    Offical Store
                </button>


                 <button className="btns"
                 onClick={() => setstatus("cp")}
                 >
                    Coveted Product
                </button>
                 
                </div>


            </div>







            { status === "" && (<div className="card_box">
           <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={shoes} alt="shoes" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Cloudy Chic - Grey Peep</p>
                    <p>Toe Healed Shoes</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp270.000</p>
                        <p className="orig_rp">Rp580.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="shoesprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={t_shirts} alt="t_shirts" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>T-Shirts for Men</p>
                    <p>Mens's T-sirts</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={watches} alt="watches" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Watches Stylish</p>
                    <p>Gracefull Watches</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp220.000</p>
                        <p className="orig_rp">Rp512.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
             
                  
                            
                        
            </div>
)} 


            { status === "" && (<div className="card_box">
                 <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={shoes} alt="shoes" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Cloudy Chic - Grey Peep</p>
                    <p>Toe Healed Shoes</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp270.000</p>
                        <p className="orig_rp">Rp580.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="shoesprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={t_shirts} alt="t_shirts" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>T-Shirts for Men</p>
                    <p>Mens's T-sirts</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={watches} alt="watches" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Watches Stylish</p>
                    <p>Gracefull Watches</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp220.000</p>
                        <p className="orig_rp">Rp512.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
                
                
                         
                        
            </div>

 )} 




        { status === "bs" && (<div className="card_box">
           <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
                
                        
            </div>
)} 


        { status === "bs" && (<div className="card_box">
                 <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>                
                         
                        
            </div>

)} 





        { status === "ks" && (<div className="card_box">
           <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
            </div>


             <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
                
                        
            </div>
)} 


        { status === "ks" && (<div className="card_box">
                <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div> 



                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    

                         
                        
            </div>

)} 




       { status === "sd" && (<div className="card_box">
           <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
            </div>


             <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
                

                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
                
                        
            </div>
)} 


        { status === "sd" && (<div className="card_box">
                <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div> 



                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
                




                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    

                         
                        
            </div>

)} 






       { status === "os" && (<div className="card_box">
           <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
            </div>


            <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
            </div>
    
                

            <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
            </div>
    
             
            <div className="card">
                    <div className="card_top">
                    <img src={shoes} alt="shoes" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Cloudy Chic - Grey Peep</p>
                    <p>Toe Healed Shoes</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp270.000</p>
                        <p className="orig_rp">Rp580.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="shoesprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
            </div>
                        
            </div>
)} 


{ status === "os" && (<div className="card_box">
                <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div> 



                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
                




                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    


                <div className="card">
                    <div className="card_top">
                    <img src={shoes} alt="shoes" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Cloudy Chic - Grey Peep</p>
                    <p>Toe Healed Shoes</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp270.000</p>
                        <p className="orig_rp">Rp580.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="shoesprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>         
                        
            </div>

)} 




{ status === "cp" && (<div className="card_box">
           <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={shoes} alt="shoes" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Cloudy Chic - Grey Peep</p>
                    <p>Toe Healed Shoes</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp270.000</p>
                        <p className="orig_rp">Rp580.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="shoesprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={t_shirts} alt="t_shirts" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>T-Shirts for Men</p>
                    <p>Mens's T-sirts</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={watches} alt="watches" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Watches Stylish</p>
                    <p>Gracefull Watches</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp220.000</p>
                        <p className="orig_rp">Rp512.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
             
                  
                            
                        
            </div>
)}


{ status === "cp" && (<div className="card_box">
                 <div className="card">
                    <div className="card_top">
                    <img src={jackets} alt="jackets" />
                    <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Elite Shield performance</p>
                    <p>Mens's Jackets</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp255.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={caps} alt="caps" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Gentlemen Summer Gray</p>
                    <p>Cap - Premium Blend</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp99.000</p>
                        <p className="orig_rp">Rp160.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={bags_image} alt="bags_image" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>OptiZoo Camera</p>
                    <p>Shoulder Bag</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp425.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="bagprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={shoes} alt="shoes" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Cloudy Chic - Grey Peep</p>
                    <p>Toe Healed Shoes</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp270.000</p>
                        <p className="orig_rp">Rp580.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="shoesprogress"></div>
                    </div>
                    <p>5/10 Sale</p>
                    </div>
                </div>
    
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={t_shirts} alt="t_shirts" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>T-Shirts for Men</p>
                    <p>Mens's T-sirts</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp250.000</p>
                        <p className="orig_rp">Rp552.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
    
    
                <div className="card">
                    <div className="card_top">
                    <img src={watches} alt="watches" />
                        <div className="like_btn">
                        <img src={heart} alt="heart" />
                    </div>
                    </div>
    
                    <div className="card_middle">
                    <p>Watches Stylish</p>
                    <p>Gracefull Watches</p>
                    
                    <div className="price">
                        <p className="disc_rp">Rp220.000</p>
                        <p className="orig_rp">Rp512.000</p>
                    </div>
                    </div>
    
                    <div className="card_lower">
                    <div className="cardlower_bar">
                        <div className="progress"></div>
                    </div>
                    <p>9/10 Sale</p>
                    </div>
                </div>
    
    
                
                
                         
                        
            </div>

)} 




        </div>
    
      
    </div>
  )
}

export default Section3
