import React,{ useState } from 'react'
import axios from 'axios'

const Weather = () => {

  let [data, setdata] = useState("");
  let [weather, setweather] = useState(null);
  const [run, setrun] = useState(false);
  const [loading, setloading] = useState(false)



  let onsearch = async ()  =>{
      setrun(true);
      setloading(true);
      try{
        let response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=31.5204&longitude=74.3587&current_weather=true");
        setweather(response.data);
      }
      catch(error){
          setweather(null);
      }
      finally{
        setloading(false);       
      }

      
  }



  




  return (
    <div>
      

         <div className="container">


          <div className="header">
            <p>Weather App</p>
          </div>




         <div className="input_div">
           
            <div className="search_row">
               <input className="input_box" type="text" placeholder="Enter your city name..."
               value={data}
               onChange={(dets)=>{
                setdata(dets.target.value)
               }}
            />

            <button className="search_btn"
            onClick={onsearch}
            >Search</button>

            </div>


          
            { run === true && <div className="inv_btn"
             style={{display: weather === null ? "block": "none"}}>
             <h4>Invalid City Name</h4>
           </div>
          }


          </div>



          <div className="weather_list">
            
            <div className="weather_listheading">
              <h2>------------------------------------------------------</h2>

            {loading && <h2>Loading Weather...</h2>}

             {weather !== null && (
               <div className="result">
                <div>Lahore</div>
                <div>{weather.current_weather.temperature} * C</div>
                <div>{weather.current_weather.time}</div>
                <div>Wind:{weather.current_weather.windspeed} km/h</div>
              </div>
             )}

            </div>


          </div>


      </div>





    </div>
  )
}

export default Weather
