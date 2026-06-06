import React,{ useState, useEffect } from 'react'
import styles from "./DetailsSection.module.css"
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const DetailsSection = () => {

  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [index, setindex] = useState(0);
  const [confirmbtn, setconfirmbtn] = useState(null)
  const [btnclicked, setbtnclicked] = useState(null)
  const [details, setdetails] = useState({})
  const [hotels, sethotels] = useState([
  {
    id: 1,
    name: "Grand Palace Hotel",
    location: "Lahore, Pakistan",
    price: 120,
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Royal Orchid Resort",
    location: "Islamabad, Pakistan",
    price: 95,
    rating: 4.6,
    reviews: 980,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Ocean View Suites",
    location: "Karachi, Pakistan",
    price: 140,
    rating: 4.9,
    reviews: 1520,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Seaside Luxury Hotel",
    location: "Gwadar, Pakistan",
    price: 110,
    rating: 4.7,
    reviews: 860,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mountain Retreat Lodge",
    location: "Murree, Pakistan",
    price: 85,
    rating: 4.5,
    reviews: 740,
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2107c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "City Center Hotel",
    location: "Lahore, Pakistan",
    price: 100,
    rating: 4.4,
    reviews: 690,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Sunset Beach Resort",
    location: "Karachi, Pakistan",
    price: 155,
    rating: 4.8,
    reviews: 1320,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Pearl Continental Stay",
    location: "Islamabad, Pakistan",
    price: 170,
    rating: 4.9,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Blue Lagoon Hotel",
    location: "Hunza, Pakistan",
    price: 130,
    rating: 4.7,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Elite Residency",
    location: "Faisalabad, Pakistan",
    price: 90,
    rating: 4.3,
    reviews: 540,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Golden Horizon Hotel",
    location: "Multan, Pakistan",
    price: 105,
    rating: 4.6,
    reviews: 780,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Royal Palm Hotel",
    location: "Lahore, Pakistan",
    price: 160,
    rating: 4.8,
    reviews: 1450,
    image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "Skyline Business Hotel",
    location: "Islamabad, Pakistan",
    price: 115,
    rating: 4.5,
    reviews: 920,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    name: "Desert Mirage Resort",
    location: "Bahawalpur, Pakistan",
    price: 100,
    rating: 4.4,
    reviews: 600,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2f8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    name: "Lake View Inn",
    location: "Attabad Lake, Pakistan",
    price: 125,
    rating: 4.7,
    reviews: 810,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    name: "Urban Stay Hotel",
    location: "Rawalpindi, Pakistan",
    price: 88,
    rating: 4.2,
    reviews: 500,
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    name: "Diamond Suites",
    location: "Karachi, Pakistan",
    price: 145,
    rating: 4.8,
    reviews: 1330,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    name: "Hilltop Escape Hotel",
    location: "Nathia Gali, Pakistan",
    price: 135,
    rating: 4.9,
    reviews: 990,
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2107c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    name: "Comfort Inn Express",
    location: "Sialkot, Pakistan",
    price: 80,
    rating: 4.3,
    reviews: 450,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "Luxury Pearl Resort",
    location: "Murree, Pakistan",
    price: 150,
    rating: 4.9,
    reviews: 1600,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
  },
  ])
  
 
  const searcheditem = search.toLocaleLowerCase();
  const filterehotels = hotels.filter((item) => 
    item.name.toLocaleLowerCase().includes(searcheditem) ||
    item.location.toLocaleLowerCase().includes(searcheditem) ||
    item.rating.toString().includes(searcheditem)
  
  )


  let detailsfun= (item) => {
    setdetails(item)

}

 let nextfun = (()=>{
    setindex( prev => prev + 1 );
 });




 let prevfun = (()=>{
    if( index != 0)
    {
        setindex( prev => prev - 1 );
    }
 });

  return (
    <div>
      <div className={styles.featuresection_container}>
        <p className={styles.heading}>
            "Find Hotel, Top-Rated and Cheap prices"
        </p>

        <input className={styles.search_box} placeholder='Search...'
        onChange={(dets)=>setsearch(dets.target.value)}
        />

        <div className={styles.wrapper}>

          <button className={styles.prevbtn}
          onClick={prevfun}>{"<"}</button>

          <div className={styles.card_section}
          style={{ transform:`translateX(-${index * 20}vw)`}}
          >
                {  
                                filterehotels.map((pcard,index)=>(
                                    <div className={styles.card}
                                    onClick={() => detailsfun(pcard)}
                                    key={pcard.id}>
                                        <div className={styles.prodimage_div}>
                                            <img src={pcard.image} alt={pcard.title} />
                                        </div>

                                        <div className={styles.prodinfo_div}>
                
                                            <div className={styles.btn}>
                                                <p className={styles.btn_para}>
                                                    Hotel Name: {pcard.name}
                                                </p>
                                            </div>
                
                                            <div className={styles.btn}>
                                                <p className={styles.btn_para}>
                                                   Cost:  {`$ ${pcard.price} per Day`}</p>
                                            </div>
                
                                            <div className={styles.btn}>
                                                <p className={styles.btn_para}>
                                                    Rating: {pcard.rating}
                                                </p>
                                            </div>


                                            <div className={styles.btn}>
                                                <p className={styles.btn_para}>
                                                    Location: {pcard.location}
                                                </p>
                                            </div>
                
                                            <div className={styles.addtocart_div}>
                                                {
                                                btnclicked != index &&(
                                                  <button className={styles.addtocartbtn}
                                                    onClick={() => setbtnclicked(index)}
                                                    >
                                                        Add To Booking List
                                                  </button>
                                                )
                                                }
                
                                                {
                                                  btnclicked == index && confirmbtn == null &&(
                                                    <div className={styles.result}>
                
                                                      <p className={styles.confirm_message}>
                                                        Confirm it:
                                                      </p>
                
                                                      <div className={styles.buttons_div}>
                                                        <button className={styles.yesbtn}
                                                        onClick={() => {
                
                                                          addtocart(pcard);
                
                                                          setconfirmbtn(true);
                                                          
                                                          setTimeout(() => {
                                                            setbtnclicked(null);
                                                            setconfirmbtn(null);
                                                          }, 2000);
                                                        }}
                                                        >
                                                          Yes
                                                        </button>
                
                                                        <button className={styles.nobtn}
                                                        onClick={() => {
                                                          setconfirmbtn(false);
                
                                                            setTimeout(() => {
                                                            setbtnclicked(null);
                                                            setconfirmbtn(null);
                                                          }, 2000);
                                                        }}
                                                        >
                                                          No
                                                        </button>
                                                      </div>
                                                    </div>
                                                  )
                                                }
                
                                                
                                                  <p className={styles.confirm_message}>
                                                    {
                                                      btnclicked == index && confirmbtn != null &&(
                                                        confirmbtn == true ? 
                                                        "Added ✔" :
                                                        "Not Added ❌"
                                                      )
                                                    }
                                                  </p>
                
                                                
                                            </div>
                
                
                                            <div className={styles.wishlist_div}>
                                                <button className={styles.wishlistbtn}
                                                onClick={() => addtowishlist(pcard) }
                                                >
                                                  <FaHeart />  Favourite
                                                </button>
                                            </div>
                                    
                                </div>
                            </div>
                                    ))
                                
                
              }
          </div>

          <button className={styles.nextbtn}
          onClick={nextfun}>{">"}</button>
        </div>

        <div className={styles.details_container}>
            <h2>Search and Click on the above cards to view the Details</h2>

           {
               details && (
            <>


            <div className={styles.details_image}>
               {details.image ? (
                  <img src={details.image} alt={details.name} />
                ) : (
                  <div className={styles.no_image}>Image</div>
                )}
            </div>


            <div className={styles.details_info}>
                <span> Name : </span>
                <span> {details.name}</span>
            </div>


            <div className={styles.details_info}>
                <span> Cost : </span>
                <span> { details.price ? `$ ${details.price}` : "" }</span>
            </div>


            <div className={styles.details_info}>
                <span> Rating : </span>
                <span> {details.rating}</span>
            </div>


            <div className={styles.details_info}>
                <span> Reviews : </span>
                <span> {details.reviews}</span>
            </div>


            <div className={styles.details_info}>
                <span> Location : </span>
                <span> {details.location}</span>
            </div>

            <div className={styles.btns_div}>
              <button className={styles.removebtn}
             onClick={() => setdetails({ name: "",  price: "",  rating: "",  reviews: "",
                location: "",  image: ""   })}
            >Remove</button>

            <button className={styles.bookbtn}
            onClick={() => navigate("/hotelspage")}
            >Book Now</button>
            </div>
         </>
               )

           }
        </div>
      </div>
    </div>
  )
}

export default DetailsSection
