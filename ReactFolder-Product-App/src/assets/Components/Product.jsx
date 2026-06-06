import React,{ useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';




const Product = () => {


  const navigate = useNavigate();
 



  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  const [check, setcheck] = useState(false);
  const [loading, setloading] = useState(false);
  

  useEffect(() =>{
      setloading(true);
      setcheck(false);
      axios.get("https://fakestoreapi.com/products")
      .then((response) => { setproducts(response.data);
            setloading(false);
            setcheck(true);
        })
      .catch((error)=> { console.log(error)
            setloading(false);
            setcheck(false)
        })
  },[])


  const searchproducts = products.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">


      <h1 className="title">Product App</h1>


      <div className="search-box">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(dets) => setSearch(dets.target.value)}
        />
        <button>Search</button>
      </div>



      

     
      {
          loading ? (
        <div className="loading_btn"><h4>Loading...</h4></div>
       ) : check && search && searchproducts.length === 0 ? (
          <h4>No product is found</h4>
       ) : check && !search ? (
        <div className="grid">
        {products.slice(0,20).map((element, index) => (
          <div className="card" key={index}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title.slice(0,20)}</h3>
            <button
            onClick={()=>navigate(`/viewdetails/${element.id}`)}
            >
              View Detail
            </button>
          </div>
        ))}
      </div>
      ) : check && search ? (
         <div className="grid">
        {searchproducts.map((element, index) => (
          <div className="card" key={index}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title.slice(0,20)}</h3>
            <button  onClick={()=>navigate(`/viewdetails/${element.id}`)}>
              View Detail
            </button>
          </div>
        ))}
      </div>
      ) : (
        <h4>No APi Data Is Found</h4>
      )

      }
       
     

    




      <div className="add-btn">
        <button 
        onClick={()=> navigate("/addproduct")}
        >Add Product</button>
      </div>




      
    </div>
  )
}

export default Product
