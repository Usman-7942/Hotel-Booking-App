import React,{ useState, useEffect } from 'react'
import styles from "./BuildPizza.module.css"
import smallpizzas from "../Images/smallpizzas.jpg"
import mediumpizzas from "../Images/mediumpizzas.jpg"
import largepizzas from "../Images/largepizzas.jpg"
import thinpizzas from "../Images/thinpizzas.jpg"
import thickpizzas from "../Images/thickpizzas.jpg"
import cheesebrustpizzas from "../Images/cheesebrustpizzas.jpg"
import chickenpizzas from "../Images/chickenpizzas.jpg"
import olivepizzas from "../Images/olivepizzas.jpg"
import cheesepizzas from "../Images/cheesepizzas.jpg"
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../Pages/CartContext/CartContext";
const BuildPizza = () => {


  
    const [btnclicked, setbtnclicked] = useState(false);
    const [totalprice, settotalprice] = useState(null);
    const [addtocart, setaddtocart] = useState(false);
    const [confirmbtn, setconfirmbtn] = useState(null);

    const { addToCart } = useContext(CartContext);
    

    const [size_obj, setsize_obj] = useState({size:"",price:null,
        check:false,status:"Not Selected"});

    const [crust_obj, setcrust_obj] = useState({size:"",price:null,
        check:false,status:"Not Selected"});

    const [thopping_obj, setthopping_obj] = useState({size:"",price:null,
        check:false,status:"Not Selected"});



    let sizefun=(value, price) =>{
        setsize_obj({
            size: value,
            price: price,
            check:true,
            status:"Selected"})
    }


     let crustfun=(value, price) =>{
        setcrust_obj({
            size: value,
            price: price,
            check:true,
            status:"Selected"})
    }



     let thoppingfun=(value, price) =>{
        setthopping_obj({
            size: value,
            price: price,
            check:true,
            status:"Selected"})
    }



    let btnfun = ()=>{
        setbtnclicked(true);
        if(size_obj.price != null && crust_obj.price != null
            && thopping_obj.price != null)
        {
            let total_price = size_obj.price + crust_obj.price + thopping_obj.price; 
            settotalprice(total_price);
        }
    } 


  return (
    <div>
        <div className={styles.heading_div}>
            <p>Build Your Own Pizza <span> 🍕 </span></p>
            <p>"Customize Your Own Delicious Pizzas"</p>
        </div>



        <div className={styles.building_container}>
            <div className={styles.building_div}>

            <div className={styles.size_div}>
                <span>Size:</span>
              <div className={styles.size_btns}>


                <div className={styles.smallimage_div}>
                    <img src={smallpizzas} alt="smallpizzas" />
                    <button className={styles.btn}
                    onClick={()=> sizefun("small", 5 )}
                    >Small ($5)</button>
                </div>



                <div className={styles.mediumimage_div}>
                    <img src={mediumpizzas} alt="mediumpizzas" />
                    <button className={styles.btn}
                    onClick={()=> sizefun("medium", 8 )}
                    >Medium ($8)</button>
                </div>



                <div className={styles.largeimage_div}>
                    <img src={largepizzas} alt="largepizzas" />
                    <button className={styles.btn}
                     onClick={()=> sizefun("large", 12 )}
                    >Large ($12)</button>
                </div>
              </div>




              <div className={styles.size_result}>

                <div className={styles.sign_div}
                style={{ backgroundColor: size_obj.check ==true ? "green" : "red" }}
                >
                    {size_obj.check ==true ? <FaCheck /> : <IoMdClose/> }

                </div>

                <div className={styles.status_div}>
                    {size_obj.status}
                </div>
              </div>


            </div>





            <div className={styles.crust_div}>
                <span>Crust:</span>
                <div className={styles.crust_btns}>


                    <div className={styles.thinimage_div}>
                        <img src={thinpizzas} alt="thinpizzas" />
                        <button className={styles.btn}
                        onClick={()=> crustfun("thin", 0 )}
                        >Thin($0)</button>
                    </div>


                   <div className={styles.thickimage_div}>
                       <img src={thickpizzas} alt="thickpizzas" />
                      <button className={styles.btn}
                      onClick={()=> crustfun("thick", 2 )}
                      >Thick($2)</button>
                   </div>


                    <div className={styles.cheesebrustimage_div}>
                        <img src={cheesebrustpizzas} alt="cheesebrustpizzas" />
                        <button className={styles.btn}
                        onClick={()=> crustfun("cheese brust", 3)}
                        >Cheese Brust($3)</button>
                    </div>
                </div>



                <div className={styles.crust_result}>

                <div className={styles.sign_div}
                style={{ backgroundColor: crust_obj.check ==true ? "green" : "red" }}
                >
                    {crust_obj.check ==true ? <FaCheck /> : <IoMdClose/> }

                </div>

                <div className={styles.status_div}>
                    {crust_obj.status}
                </div>
              </div>


            </div>





            <div className={styles.thopping_div}>
                <span>Thopping:</span>
                <div className={styles.thopping_btns}>
                   <div className={styles.chickenimage_div}>
                     <img src={chickenpizzas} alt="chickenpizzas" />
                     <button className={styles.btn}
                     onClick={()=> thoppingfun("chicken", 1.5)}
                     >Chicken ($1.5)</button>
                   </div>


                   <div className={styles.oliveimage_div}>
                     <img src={olivepizzas} alt="olivethoppingpizzas" />
                     <button className={styles.btn}
                     onClick={()=> thoppingfun("olive", 1.5)}
                     >Olive ($1.5)</button>
                   </div>


                   <div className={styles.cheeseimage_div}>
                     <img src={cheesepizzas} alt="cheesepizzas" />
                     <button className={styles.btn}
                     onClick={()=> thoppingfun("cheese", 1.5)}
                     >Cheese ($1.5)</button>
                   </div>
                </div>



                <div className={styles.thopping_result}>

                <div className={styles.sign_div}
                style={{ backgroundColor: thopping_obj.check ==true ? "green" : "red" }}
                >
                    {thopping_obj.check ==true ? <FaCheck /> : <IoMdClose/> }

                </div>

                <div className={styles.status_div}>
                    {thopping_obj.status}
                </div>
              </div>


            </div>







            {
                btnclicked ==true && (size_obj.check == false ||
                crust_obj.check == false ||
                thopping_obj.check == false) && (   
                <div className={styles.showing_div}>
                    <p>Please select any one option from each of these three rows</p>             
                </div>
                )
            }
            {    addtocart == true && totalprice == null && (
                 <div  className={styles.showing_div}>
                    <p>First Select each one option from each
                  row and see the price and then press Add To Cart button</p>
                 </div>
                )
            }   

            


            <div className={styles.totalprice_div}
            onClick={()=> btnfun()}
            >
                <button>
                    Total Price
                </button>


                {
                    totalprice && (
                    <p> $ {totalprice} </p>
                    )
                }
            </div>



            
                
                <div className={styles.addtocart_div}>
                    <button
                    onClick={() => setaddtocart(true)}
                    >
                        Add To Cart
                    </button>
                    {
                        addtocart == true && totalprice != null &&
                        confirmbtn == null &&
                        (<div className={styles.confirm_div}>
                            <span>Confirm Your Pizza:</span>
                            <button className={styles.yes_btn}
                            onClick={()=> {
                                addToCart(pcard);  
                                setconfirmbtn(true);}}
                            >Yes</button>
                            <button className={styles.no_btn}
                             onClick={()=> setconfirmbtn(false)}
                             >No</button>
                        </div>
                        )
                    }
                    {   addtocart == true && totalprice != null &&
                        confirmbtn == true &&
                        (
                            <div className={styles.confirm_div}>
                                <span>Your Pizza is added to the cart</span>
                            </div>
                        )
                    }
                    {   addtocart == true && totalprice != null &&
                        confirmbtn == false &&
                        (
                            <div className={styles.confirm_div}>
                                <span>Your Pizza is not added to the cart</span>
                            </div>
                        )
                    
                    }
                    
                </div>
                
            







            </div>



        </div>






      
    </div>
  )
}

export default BuildPizza
