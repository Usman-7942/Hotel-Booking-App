import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import './App.css';



function App() {

  const [userdata, setuserdata] = useState([]);
  const [index, setindex] = useState(1);


  let getdata = async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    
    setuserdata(response.data);

    console.log(response.data);
  } 


    let printuserdata = <h2 className="loading">Loading...</h2>;


    if(userdata.length > 0)
    {
      printuserdata = userdata.map( function (element, index){
        return <div key={index}>
          <Card element = {element}/>
        </div>
      })
    }



    useEffect( function() {
      getdata();
    },[index])


  return (
    <div >
      
      
      <div className="container">
        {printuserdata}
      </div>


      <div className="btn_container">
        <button 
        style = {{opacity: index == 1 ? 0.4 : 1}}
        className="prev_btn"
        onClick={() => {
          if(index > 1)
          {
            setindex(index - 1);
            setuserdata([]);
          }
        }}
        >Prev</button>
        <h4>Page {index}</h4>
        <button className="nex_btn"
        onClick={() => {
            setindex(index + 1);
            setuserdata([]);
        }}
        >Next</button>
      </div>


    </div>



  )
}

export default App
