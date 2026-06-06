import React,{ useState } from 'react'
import app_image from "../Section1/app_image.jpg"
import shopping_image from "../Section1/shopping_image.jpg"
import search_image from "../Section1/search_image.png"
import bag from "../Section1/bag.png"
import bell from "../Section1/bell.png"
import clothes_1 from "../Section1/clothes_1.jpg"
import t_shirts from "../Section1/t_shirts.png"
import jackets from "../Section1/jackets.jpg"
import shirts from "../Section1/shirts.jpg"
import jeans from "../Section1/jeans.jpg"
import bags_image from "../Section1/bags_image.jpg"
import shoes from "../Section1/shoes.png"
import watches from "../Section1/watches.jpg"
import caps from "../Section1/caps.jpg"
import allcategories from "../Section1/allcategories.jpg"
import "./Section1.css"






const Section1 = () => {

  const [index, setindex] = useState(0);
 const clothesImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&auto=format&fit=crop",
    title: "Black Hoodie"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    title: "White T-Shirt"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop",
    title: "Denim Jacket"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1583003346269-1c67f7e2d2f1?w=800&auto=format&fit=crop",
    title: "Blue Jeans"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop",
    title: "Casual Shirt"
  }
];

  let changeindex = ()=>{
    
    if(index == clothesImages.length - 1)
    {
      setindex(0);
    }
    else
    {
      setindex(index + 1);
    }
  }
  return (
    <div className="container_section1">
      <nav>
        <div className="download_app">
            <div className="app_image">
                <img src={app_image} alt="app_image" />
            </div>
        Download BeliBeli App</div>


        <div className="navbar_buttons">
            <button className="navbar_btn">Mtra BeliBeli</button>
            <button className="navbar_btn">About BeliBeli</button>
            <button className="navbar_btn">Care BeliBeli</button>
            <button className="navbar_btn">Promo BeliBeli</button>
            <button className="signUp_btn">Sign Up</button>
            <button className="logIn_btn">Login </button>
        </div>

      </nav>






        {/*Search Section*/}    

        <div className="search_section">

        {/* Shopping Logo */}
        <div className="shopping_icon">
          <img src={shopping_image} alt="logo" />
        </div>

        {/* Search Box */}
        <div className="search_box">

          <div className="select_box">
            <select>
              <option>All Category</option>
              <option>T-Shirt</option>
              <option>Jacket</option>
              <option>Shirt</option>
              <option>Jeans</option>
              <option>Bag</option>
              <option>Shoes</option>
              <option>Watches</option>
              <option>Cap</option>
            </select>
            <span className="arrow">▾</span>
          </div>

        

          <div className="input_box">
            <img src={search_image} alt="search" />
            <input type="text" placeholder="Search product or brand here..." />
          </div>

        </div>

        <div className="bag_image">
          <img src={bag} alt="bag" />
        </div>

        <div className="bell_image">
          <img src={bell} alt="bell" />
        </div>

      </div>









        {/*Sales section*/}
        <div className="sales_section">


          <div className="left_side">
            <p className="text1">#Big Fashion Sale</p>
          
            <p className="heading1">
              Limited Time Offer!
            </p>
            
            <p className="heading2">
              Up to 50% OFF!
            </p>
           
            <p className="text2">
              Redefined Your Everyday Style
            </p>
          </div>



          <div className="right_side">
            <img src={clothesImages[index].url} alt="clothes_1" />
            <button className="next_btn"
            onClick={changeindex}
            >
            {">"}
          </button>
          </div>
        </div>
      
    






        {/* Categories */}

        <div className="categories">

          <div className="main_div">
              <img src={t_shirts} alt="t_shirts" />
              <p>T-Shirts</p>
          </div>



           <div className="main_div">
              <img src={jackets} alt="jackets" />
              <p>Jackets</p>
          </div>



           <div className="main_div">
              <img src={shirts} alt="shirts" />
              <p>Shirts</p>
          </div>





           <div className="main_div">
              <img src={jeans} alt="jeans" />
              <p>Jeans</p>
          </div>
           


            <div className="main_div">
              <img src={bags_image} alt="bags_image" />
              <p>Bags</p>
          </div>




           <div className="main_div">
              <img src={shoes} alt="shoes" />
              <p>Shoes</p>
          </div>





           <div className="main_div">
              <img src={watches} alt="watches" />
              <p>Watches</p>
          </div>




           <div className="main_div">
              <img src={caps} alt="caps" />
              <p>Caps</p>
          </div>




          <div className="main_div">
              <img src={allcategories} alt="allcategories" />
              <p>All Categories</p>
          </div>



           


          


          


    
        </div>












      </div>
    
  )
}

export default Section1
