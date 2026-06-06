import React,{ useContext, useState } from 'react'
import styles from "./HotelsPage.module.css"
import { HotelContext } from '../ContextApi/ContextApi';
import { FaHeart } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const HotelsPage = () => {

    const { addtobookedhotels } = useContext( HotelContext );

    const [index, setindex] = useState(0);
    const [confirmbtn, setconfirmbtn] = useState(null)
    const [btnclicked, setbtnclicked] = useState(null)
    const [details, setdetails] = useState({});
    const [data, setdata] = useState({checkin:"", checkout:"", guests:"",
      fullname:"", email:"", phoneno:""
    })
    const [price, setprice] = useState({nights: 0, tax: 10, total: 0});
    const [cardcheck, setcardcheck] = useState(null);
    const [errorcheck, seterrorcheck] = useState(null);
    const [bookedcheck, setbookedcheck] = useState(null);

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

    const [input_error, setinput_error] = useState({ email: false , phoneno: false })
    const [finalhotelsdata, setfinalhotelsdata] = useState(null)


  let detailsfun = (item) => {
    setdetails(item);
    setcardcheck(true);
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


 let handlesubmit=()=>{


      if(errorcheck === false)
      {
        (setcardcheck(true))
      }
  
      if(!details.name)
      {
        setcardcheck(false);
      }

      if(data.checkin === "" || data.checkout === "" || data.guests === "" ||
        data.fullname === "" || data.email === "" || data.phoneno === "")
      {
        seterrorcheck(true);
      }
      else
      {
         seterrorcheck( false);
     
      }
      
      const checkinDate = new Date(data.checkin);
      const checkoutDate = new Date(data.checkout);

      checkinDate.setHours(0, 0, 0, 0);
      checkoutDate.setHours(0, 0, 0, 0);

      const diffTime = checkoutDate.getTime() - checkinDate.getTime();

      const totalnights =
        diffTime > 0 ? Math.floor(diffTime / ( 24 * 60 * 60 * 1000 )) : 0;

        
      const subtotal = totalnights * details.price;
      const taxAmount = subtotal * (price.tax / 100);
      const totalCost = subtotal + taxAmount;
      


      const HotelData = {
        hotel: details,
        user: {
          fullname: data.fullname,
          email: data.email,
          phoneno: data.phoneno,
        },
        booking: {
          checkin: data.checkin,
          checkout: data.checkout,
          guests: data.guests,
          nights: totalnights,
        },
        price: {
          tax: price.tax,
          total: totalCost,
        }
      };

      setprice({ nights: totalnights, tax: 10, total: totalCost});

      setfinalhotelsdata(HotelData);
     
 }


  
  
  let bookedfun = () => {

  if (errorcheck !== false || cardcheck !== true) {
    setbookedcheck(false);
    return;
  }

   addtobookedhotels(finalhotelsdata);


  setbookedcheck(true);

  setTimeout(() => {
    setbookedcheck(null);
  }, 4000);
};


 let checkfun = (dets) => {

  const { name, value } = dets.target;

  setdata((prev) => ({
    ...prev,
    [name] : value
  }))
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^03\d{2}-?\d{7}$/;

  if( name === "email" )
  {

    const email = emailRegex.test(value);

    if(email)
    {
      setinput_error((prev) => ({ ...prev , email: false }))  
    }

    else
    {
      setinput_error((prev) => ({ ...prev , email: true })) 
    }
  }


   if( name === "phoneno" )
  {

    const phone = phoneRegex.test(value);

    if(phone)
    {
      setinput_error((prev) => ({ ...prev , phoneno: false }))  
    }
    else
    {
      setinput_error((prev) => ({ ...prev , phoneno: true })) 
    }
  }


 }

  return (
    <div>

      <Navbar/>


      <div className={styles.homepage_container}>
         <p className={styles.heading}>
                    "Hotels that you added in the booking list"
                </p>
        
              
                <div className={styles.wrapper}>
        
                  <button className={styles.prevbtn}
                  onClick={prevfun}>{"<"}</button>
        
                  <div className={styles.card_section}
                  style={{ transform:`translateX(-${index * 20}vw)`}}
                  >
                        {  
                                        hotels.map((pcard,index)=>(
                                            <div className={styles.card} key={pcard.id}
                                            onClick={() => detailsfun(pcard)}
                                            >
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
                                                        <button className={styles.wishlistbtn}>
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
      </div>
      
     <div className={styles.booking_container}>
        
      <div className={styles.bookinginfo_container}>
        <p className={styles.heading}>Click the card to get your hotel info for Booking</p>
        <p className={styles.para}>Booking Info</p>

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
        
                    
                      <button className={styles.removebtn}
                     onClick={() => setdetails({ name: "",  price: "",  rating: "",  reviews: "",
                        location: "",  image: ""   })}
                    >Remove</button>
        
                    
                 </>
                       )
        
         }            
                 
                       
      </div>

      

       <div className={styles.input_div}>
            <p className={styles.input_heading}>Fill all the input</p>

            {
              errorcheck ===true && (<p className={styles.error_div}>
                Fill all the Input Boxes</p>)
            }
            
                    <div className={styles.input_info}>
                        <span> Check In : </span>
                        <span> <input className={styles.checkin} type="date"
                        onChange={(dets) => setdata((prev)=>({...prev,checkin: dets.target.value}))}
                        /> </span>
                    </div>
        
        
                    <div className={styles.input_info}>
                        <span> Check Out : </span>
                        <span> <input className={styles.checkin} type="date"
                        onChange={(dets) => setdata((prev)=>({...prev,checkout: dets.target.value}))}
                        /> </span>
                    </div>

                    
        
        
                    <div className={styles.input_info}>
                        <span> Guests : </span>
                        <span> <input className={styles.checkin} type="number" 
                        placeholder="Enter Guests Numbers"
                        onChange={(dets) => setdata((prev)=>({...prev,guests: dets.target.value}))}
                        /> </span>
                    </div>

                    
                            
        
                    <div className={styles.input_info}>
                        <span> Full Name : </span>
                        <span> <input className={styles.checkin} type="text" placeholder="Enter Your Full Name"
                        onChange={(dets) => setdata((prev)=>({...prev, fullname: dets.target.value}))}
                        /> </span>
                    </div>

                    {
                        input_error.email === true && (
                            <p style={{ color: "red" }}>
                                Enter Valid Email
                            </p>
                        )
                    }
        
                    <div className={styles.input_info}>
                        <span> Email : </span>
                        <span> <input className={styles.checkin} type="email" placeholder="Enter Your Email Address"
                        name="email"
                        onChange={checkfun}
                        /> </span>
                    </div>


                      {
                        input_error.phoneno === true && (
                            <p style={{ color: "red" }}>
                                Enter Valid Phone Number
                            </p>
                        )
                    }

                      <div className={styles.input_info}>
                        <span> Phone Number : </span>
                        <span> <input className={styles.checkin} type="tel" placeholder="Enter Your Phone Number"
                        name="phoneno"
                        onChange={checkfun}
                        /> </span>
                    </div>

                    <button className={styles.submitbtn}
                      onClick={handlesubmit}
                    >Submit</button>


                   {
                    errorcheck === false && ( <p className={styles.result_div}>
                      Check the Total Cost and Confirm your Booking</p>)
                   }


                    {
                    cardcheck === false && ( <p className={styles.error_div}>
                      First Select your Hotel Card by clicking it to Book your Hotel </p>)
                   }
         </div>



         <div className={styles.price_div}>

            <p className={styles.price_heading}>Total Cost Summary</p>


           <div className={styles.input_info}>
                        <span> Nights : </span>
                        <span> { price.nights === 0 ? "" : price.nights } </span>
                    </div>
        
        
                    <div className={styles.input_info}>
                        <span> Price Per Night : </span>
                        <span> { price.nights === 0 ? "" : details.price } </span>
                    </div>
        
        
                    <div className={styles.input_info}>
                        <span> Tax : </span>
                        <span>  { price.total === 0 ? "" : price.tax }  </span>
                    </div>
        
        
                    <div className={styles.input_info}>
                        <span> Total Cost : </span>
                        <span>  { price.total === 0 ? "" : price.total }  </span>
                    </div>
                   
                   <div className={styles.bookedbtn}
                    onClick={bookedfun}
                   >Book Now</div>

                   {
                      errorcheck === false && cardcheck ===true && bookedcheck === true &&
                      (
                        <p className={styles.booked_div}
                        > Your Hotel is Booked Now ✔ </p>
                      ) 
                   }

                   {
                      bookedcheck === false && (
                        <p className={styles.error_div }
                        > Fill All the Information and Try Again</p>
                      )
                   }
         </div>

     </div>

      <Footer/>

      
    </div>
  )
}

export default HotelsPage
