import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Food = () => {


  const navigate = useNavigate();

  const [food, setfood] = useState([]);
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const [check, setcheck] = useState(false);



  useEffect(()=>{
    setloading(true);
    setcheck(false);
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((response)=> {
      setfood(response.data.meals);
      setloading(false);
      setcheck(true);
    })
    .catch((error)=>{
      console.log(error)
      setloading(false);
      setcheck(true);
    })
  },[])




  let searchfood = food.filter((item)=>
    item.strMeal.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <div className="app">
    

    {/* Header */}
    <div className="header">
      <h1>Food Menu</h1>
    </div>




    {/* Search */}
    <div className="search-container">
      <input type="text" placeholder="Search food..." 
      value={search}
      onChange={(dets)=>{
        setsearch(dets.target.value);
      }}
      />



      <button className="search-btn">
        Search
      </button>
    </div>





   {
      loading ? (
        <h4>Loading...</h4>
      ) : check &&  search  && searchfood.length === 0 ?(
        <h4>No food is search</h4>
      ) : check && !search ?(
         <div className="cards-container">
          {
            food.slice(0,7).map((element,index)=>(
              <div className="card" key={index}>
                <img src={element.strMealThumb} alt={element.strMeal} />
                <h2>{element.strMeal}</h2>
                <p>{element.strInstructions.slice(0,80)}</p>
                <button className="view-btn"
                onClick={()=> navigate(`/viewdetails/${element.idMeal}`)}
                >View imagedetails</button>
              </div>
            ))
          }
          </div>
      ) : check && search ? (
         <div className="cards-container">
          {
            searchfood.map((element,index)=>(
              <div className="card">
                <img src={element.strMealThumb} alt={element.strMeal} />
                <h2>{element.strMeal}</h2>
                <p>{element.strInstructions.slice(0,15)}</p>
                <button className="view-btn">View imagedetails</button>
              </div>
            ))
          }
          </div>
          ): (
            <h4>No api data is found</h4>
          )

   }




    {/* Add Button */}
    <div className="add-container">
      <button className="add-btn"
      onClick={()=> navigate("/addmore")}
      >+ Add Food</button>
    </div>

        
      
    </div>
  )
}

export default Food
