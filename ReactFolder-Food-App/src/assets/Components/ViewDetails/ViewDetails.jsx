import React,{ useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import './ViewDetails.css'

const ViewDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const foodid = id;


    const [food, setfood] = useState(null);
    const [loading, setloading] = useState(false);
 



    useEffect(()=>{

        if(isNaN(id))
        {
            alert("Please enter a valid id number");
            return;
        }


        setloading(true);
        
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response)=> {
        
        
        
        const meal = response.data.meals?.[0];

        if (!meal) {
          alert("No food found for this ID");
          setfood(null);
        } else {
          setfood(meal);
        }

        setloading(false);
         
        })
        .catch((error)=>{
            console.log(error)
            setloading(false);
            
        })
    },[id])

  return (
    <div>

        {
          loading ? (
                <h4>Loading...</h4>
            ) : food ?(
         <div className="details-page">
          {
           
              <div className="details-card" >
                <img src={food.strMealThumb} alt={food.strMeal} />
                <h2>{food.strMeal}</h2>
                <p>{food.strInstructions.slice(0,130)}</p>
              </div>
            
          }
          </div>
      ) : (
        <h4>No data is found</h4>
      )


    }



     <div className="btn-wrapper">
        <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ⬅ Back
          </button>
     </div>
      
    </div>
  )
}

export default ViewDetails
