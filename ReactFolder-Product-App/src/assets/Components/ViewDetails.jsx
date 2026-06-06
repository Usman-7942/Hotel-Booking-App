import React,{ useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';



const ViewDetails = () => {
  

  const { id } = useParams(); 
  const navigate = useNavigate();

  const [products, setproducts] = useState(null);
  const [loading, setloading] = useState(false);
  const [check, setcheck] = useState(false);



  useEffect(() => {

    if (!id) {
      navigate("/");
    }
     setloading(true);
     setcheck(false);
     axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => { setproducts(response.data);
            setloading(false);
            setcheck(true);
        })
      .catch((error)=> { console.log(error)
            setloading(false);
            setcheck(false)
        })
  }, [id]);




  return (
    <div className="details"> 

        {loading ? (
        <h3>Loading...</h3>
      ) : check && products ? (
        <div className="card-details">
          <img src={products.image} alt={products.title} />
          <h2>{products.title}</h2>
          <p className="price">${products.price}</p>
          <p className="desc">{products.description}</p>
        </div>
      ) : (
        <h3>No Product Found</h3>
      )}


        {/* 🔙 Back Button */}
    <div className="back-btn-container">
      <button onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
      
    </div>
  )
}

export default ViewDetails
