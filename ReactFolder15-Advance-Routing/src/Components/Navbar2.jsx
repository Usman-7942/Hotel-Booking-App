import React from 'react'
import { useNavigate } from 'react-router-dom';




const Navbar2 = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar2">


        <button onClick={() => {
        navigate("/");
      }}
      className="return_btn"
      >Return to Home Page</button>


      <button onClick={() => {
        navigate(-1);
      }}
      className="return_btn"
      >Back</button>


      <button onClick={() => {
        navigate(+1);
      }}
      className="return_btn"
      >Next</button>
      
    </div>
  )
}

export default Navbar2
