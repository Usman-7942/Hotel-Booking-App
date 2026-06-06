import React,{ useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'


const AddProduct = () => {

    const navigate = useNavigate();

    const [id, setid] = useState(null);
    const [url, seturl] = useState("");
    const [title, settitle] = useState("");
    const [price, setprice] = useState("");
    const [desc, setdesc] = useState("");
    const [loading, setloading] = useState(false);
    const [check, setcheck] = useState(false);






    const handlesubmit = async () =>{

        if(!id || !url || !title || !price || !desc)
        {
            alert("Please fill all the fields");
            return;
        }

        const productid = parseInt(id);


        if(isNaN(productid))
        {
            alert("Enter a valid number");
            return;
        }


        try{
            const response =await axios.get(`https://fakestoreapi.com/products/${id}`)

            
            
            if(response.data && response.data.id)
            {
                alert(`Id ${id}already exists in API.Try again.`);
                return;
            }
        }
        catch{

        }


        let oldproduct = JSON.parse(localStorage.getItem("newproducts")) || [];
        let existproduct = oldproduct.find((item)=>item.id === productid);


        if(existproduct)
        {
            alert("Product id already exist in the localstorage.Try again.")
            return;
        }



        const newproduct = {
            id: productid,
            image: url,
            title,
            price,
            description: desc
            
        }


        localStorage.setItem("newproducts", JSON.stringify([newproduct, ...oldproduct]));


        alert("New Product is added");

        navigate("/");
    }




    

  return (
    <div className="form-container">
        
        
        <input type="number" placeholder="Enter a unique id..."
        value={id}
        onChange={(dets) => {
            setid(dets.target.value)
        }} />


        <br/><br/>


        <input type="text" placeholder="Enter your image url..."
        value={url}
        onChange={(dets) => {
            seturl(dets.target.value)
        }}/>


        <br/><br/>


        <input type="text" placeholder="Enter your product title..."
        value={title}
        onChange={(dets) => {
            settitle(dets.target.value)
        }}/>


        <br/><br/>


        <input type="number" placeholder="Enter your product price..."
        value={price}
        onChange={(dets) => {
            setprice(dets.target.value)
        }}/>


        <br/><br/>


        <textarea placeholder="Enter your product description..."
        value={desc}
        onChange={(dets) => {
            setdesc(dets.target.value)
        }}/>



        <button onClick={handlesubmit}>Add Product</button>
        <button onClick={()=> navigate("/")}>Back</button>




    </div>
  )
}

export default AddProduct
