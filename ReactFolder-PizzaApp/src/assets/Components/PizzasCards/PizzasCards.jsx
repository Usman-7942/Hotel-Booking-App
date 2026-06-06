import React,{ useState } from 'react'
import { useContext } from "react";
import { CartContext } from "../../Pages/CartContext/CartContext";
import styles from "./PizzasCards.module.css"
const PizzasCards = () => {


  const [index, setindex] = useState(0);
  const [actionType, setActionType] = useState(null);
  const [confirmIndex, setConfirmIndex] = useState(null);
  const [addedMsg, setAddedMsg] = useState(null);


  const { addToCart } = useContext(CartContext);




  const pizzascards = [
  {
    id: 1,
    name: "Cheese Margherita",
    price: 9.99,
    isVeg: true,
    category: "Cheesy",
    rating: 4.5,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  },
  {
    id: 2,
    name: "Pepperoni Feast",
    price: 12.99,
    isVeg: false,
    category: "Spicy",
    rating: 4.7,
    image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
  },
  {
    id: 3,
    name: "Veggie Supreme",
    price: 10.99,
    isVeg: true,
    category: "Veg",
    rating: 4.3,
    image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
  },
  {
    id: 4,
    name: "BBQ Chicken Delight",
    price: 13.99,
    isVeg: false,
    category: "BBQ",
    rating: 4.6,
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
  },
  {
    id: 5,
    name: "Four Cheese Blast",
    price: 11.49,
    isVeg: true,
    category: "Cheesy",
    rating: 4.4,
    image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
  },
  {
    id: 6,
    name: "Spicy Beef Inferno",
    price: 14.99,
    isVeg: false,
    category: "Spicy",
    rating: 4.8,
    image: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg",
  },
  {
    id: 7,
    name: "Garden Fresh Pizza",
    price: 10.49,
    isVeg: true,
    category: "Veg",
    rating: 4.2,
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
  },
  {
    id: 8,
    name: "Chicken Tikka Supreme",
    price: 13.49,
    isVeg: false,
    category: "Spicy",
    rating: 4.7,
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
  },
  {
    id: 9,
    name: "Mushroom Truffle Pizza",
    price: 12.49,
    isVeg: true,
    category: "Gourmet",
    rating: 4.6,
    image: "https://images.pexels.com/photos/2762939/pexels-photo-2762939.jpeg",
  },
  {
    id: 10,
    name: "Loaded Meat Lovers",
    price: 15.99,
    isVeg: false,
    category: "Meaty",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
  },
  ];

  let next =(()=>{
    setindex(next => next + 1)
  })

  let prev = (()=>{
    setindex(prev => prev - 1)
  })


    
  return (
    <div>
        <div className={styles.card_wrapper}>


           <button className={styles.prev_btn}
            onClick={prev}
            >
              {"<"}
            </button>



            <div className={styles.card_section}
             style={{
              transform: `translateX(-${index * 20}vw)`
             }}
            >
                
                
              {
                pizzascards.map((pcard, ind)=>(
                   <div className={styles.card} key={pcard.id}>
                    <div className={styles.card_image}>
                      <img src={pcard.image} alt={pcard.id} />
                    </div>



                    <div className={ styles.cardinfo_div}>
                      <div className={styles.card_name}>
                      <p>{pcard.name}</p>
                    </div>

                    <div className={styles.card_rating}>
                      <p>{pcard.rating}</p>
                    </div>

                    <div className={styles.card_price}>
                     <p>{pcard.price}</p>
                    </div>

                    



                    <div className={styles.addtocart_div}>

                            {/* DEFAULT BUTTON */}
                            {confirmIndex !== ind && addedMsg !== ind && (
                              <button
                                className={styles.addtocart_btn}
                                onClick={() => setConfirmIndex(ind)}
                              >
                                Add To Cart
                              </button>
                            )}

                            {/* CONFIRM BOX */}
                            {confirmIndex === ind && (
                              <div className={styles.confirm_box}>
                                <p>Confirm?</p>

                                <button
                                  className={styles.yes_btn}
                                  onClick={() => {

                                    addToCart(pcard); 


                                    setActionType("yes");
                                    setAddedMsg(ind);
                                    setConfirmIndex(null);

                                  setTimeout(() => {
                                    setAddedMsg(null);
                                    setActionType(null);   // reset
                                  }, 2000);
                                  }}
                                >
                                  Yes
                                </button>

                                <button
                                  className={styles.no_btn}
                                  onClick={() => {
                                    setActionType("no");
                                    setAddedMsg(ind);
                                    setConfirmIndex(null);

                                    setTimeout(() => {
                                      setAddedMsg(null);
                                      setActionType(null);   // reset
                                    }, 2000);
                                  }}
                                >
                                  No
                                </button>
                              </div>
                            )}

                            {/* RESULT MESSAGE */}
                            {addedMsg === ind && (
                              <div className={styles.confirm_box}>
                                <p>
                                  {actionType === "yes"
                                    ? "Added ✔"
                                    : "Not Added ❌"}
                                </p>
                              </div>
                            )}

                    </div>




                  




                    <div className={styles.moredetails_div}>
                      <button className={styles.moredetails_btn}>
                        More Details
                      </button>
                    </div>







                    </div>

                    
                    
                </div>
                ))
              }                
            </div>


                     <button className={styles.next_btn}
                        onClick={next}
                        >
                          {">"}
                     </button>
        </div>
      
    </div>
  )
}

export default PizzasCards
