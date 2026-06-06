import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {


  const [data, setdata] = useState([])


  let getdata = async () => {
    let response = await axios.get("https://picsum.photos/v2/list");
    setdata(response.data);
    console.log(response.data);
  }
    //without async await the function start to waiting
    //for the response
  return (
    <div>
        <button onClick={getdata}>Click</button>
        <div>
          {data.map((element, index) => {
            return <h3>Hello, {element.author} {index}</h3>
          })}
        </div>
    </div>
  )
}

export default App
