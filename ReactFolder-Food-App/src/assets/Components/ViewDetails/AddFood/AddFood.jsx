import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddFood.css"




const AddFood = () => {


  const navigate = useNavigate();


  
  const [form, setForm] = useState({
      idMeal: "",
      strMeal: "",
      strMealThumb: "",
      strInstructions: ""
    });




  const handleChange = (dets) => {
    setForm({
      ...form,
      [dets.target.name]: dets.target.value
    });
  };




  const handleSubmit = () => {


    const { idMeal, strMeal, strMealThumb, strInstructions } = form;

    // validation
    if (!idMeal || !strMeal || !strMealThumb || !strInstructions) {
      alert("Please fill all fields");
      return;
    }



    if (isNaN(idMeal)) {
      alert("ID must be a number");
      return;
    }

    

    // get old data
    let oldfoods = JSON.parse(localStorage.getItem("newfoods")) || [];



    // check duplicate
    const exist = oldfoods.find(item => Number(item.idMeal) === Number(idMeal));

    if (exist) {
      alert("Food already exists");
      return;
    }

    // add new food
    const updatedfoods = [...oldfoods, form];

    localStorage.setItem("newfoods", JSON.stringify(updatedfoods));

    alert("Food added successfully");

    navigate("/");
    
  }

  return (
    <div>
    <div className="addfood-page">
    <div className="addfood-card">

      <h2>Add Food</h2>

      <input name="idMeal" onChange={handleChange} placeholder="ID" />
      <input name="strMeal" onChange={handleChange} placeholder="Food Name" />
      <input name="strMealThumb" onChange={handleChange} placeholder="Image URL" />
      
      <textarea name="strInstructions" placeholder="Enter Food Description..."
      onChange={handleChange}></textarea>

      <button className="add-btn" onClick={handleSubmit}>
        Add Food
      </button>

    </div>
  </div>
      
    </div>
  )
}

export default AddFood
