import React,{ useState } from 'react';
import flash_image from "../Section2/flash_image.png";
import jackets from "../Section2/jackets.jpg"
import caps from "../Section2/caps.jpg"
import bags_image from "../Section2/bags_image.jpg"
import shoes from "../Section2/shoes.png"
import t_shirts from "../Section2/t_shirts.png"
import watches from "../Section2/watches.jpg"
import heart from "../Section2/heart.png"
import "./Section2.css";




const Section2 = () => {


  const [index, setIndex] = useState(0);

  let next = () => {
    setIndex(prev => prev + 1);
  };

  let prev = () => {
    setIndex(prev => (prev === 0 ? 0 : prev - 1));
  };


  return (
    <div>
      <div className="container">
        
      <div className="top_bar">
        <div className="flashsale_bar">
            <div className="flash_btn">
                <img src={flash_image} alt="flash_btn" />
            </div>
            <span className="flashsales_bartext"
            >Flash Sales</span>

            <div className="timer">08</div>
            <span>:</span>
            <div className="timer">17</div>
            <span>:</span>
            <div className="timer">56</div>
        </div>


        <div className="arrow_btn">
          <button className="leftarrow_btn"
          onClick={prev}
          >🠄</button>
        <button className="rightarrow_btn"
        onClick={next}
        >🠆</button>
        </div>

      </div>


       <div className="cards_wrapper">
         <div className="cards_section"
          style={{
            transform: `translateX(-${index * 70}vw)`
          }}
         >
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
                <p>Mens's T-shirts</p>
                
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
       </div>

      </div>




        













    </div>
  )
}

export default Section2
