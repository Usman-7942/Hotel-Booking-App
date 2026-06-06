import React,{ useState} from 'react'
import "./ColorGenerator.css"
const ColorGenerator = () => {


  const [color, setcolor] = useState([]);

  let generatecolor = ()=>{
    let nextcolor = [];

    for(let i=0 ; i< 6 ; i++)
    {
        let randomcolor = Math.floor(Math.random() * 1000000)
        nextcolor.push(`#${randomcolor}`);
    }
    setcolor(nextcolor);
  }

  return (
    <div>
      <div className="container">
        <h2>Color Generator</h2>

        <button className="generate_btn"
        onClick={generatecolor}
        >
            Generate Colors
        </button>
        <div className="colors_div">
           {
             color.map((col, index)=>(
                <div className="color"  style={{ backgroundColor: col}} 
                key={index}>
                <p > {col}</p>
            </div>
             ))
           }     
        </div>
      </div>
    </div>
  )
}

export default ColorGenerator
