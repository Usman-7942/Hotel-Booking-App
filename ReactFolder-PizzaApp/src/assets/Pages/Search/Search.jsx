import React,{ useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import styles from "./Search.module.css"
const Search = () => {


  const [search, setsearch] = useState("");
  const [actionType, setActionType] = useState(null);
  const [confirmIndex, setConfirmIndex] = useState(null);
  const [addedMsg, setAddedMsg] = useState(null);
  const pizzas = [
    { id: 1, name: "Cheese Margherita", category: "Cheesy", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg" },
    { id: 2, name: "Pepperoni Feast", category: "Spicy", image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg" },
    { id: 3, name: "Veggie Supreme", category: "Veg", image: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg" },
    { id: 4, name: "BBQ Chicken", category: "BBQ", image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
  ];



  const filtered = pizzas.filter((pizza)=>
    pizza.name.toLowerCase().includes(search.toLowerCase()) ||
    pizza.category.toLowerCase().includes(search.toLowerCase())   
  );


  
  return (
    <div>
      <Navbar/>

      <div className={styles.search_container}>
        <input
         type="text"
         placeholder="Search Pizza..."
         value={search}
         onChange={(dets) => setsearch(dets.target.value)}
        />  
      </div>      


      <div className={styles.results_div}>
        {
          search == "" && (
            <p className={styles.search_heading}>
              Popular Pizzas 🍕
            </p>
          )
        }


        {
          search != "" && filtered.length == 0 && (
            <p className={styles.no_result}>
              No Pizzas Found 🍕
            </p>
          )
        }


        
          <div className={styles.search_cards}>
            {
              (search == "" ? pizzas : filtered).map((pizza, ind)=>(
                <div key={pizza.id} className={styles.search_card}>
                  <img src={pizza.image} alt={pizza.name} />
                  <p>{pizza.name}</p>
                  <span>{pizza.category}</span>



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
                </div>

              ))
            }
          </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Search
