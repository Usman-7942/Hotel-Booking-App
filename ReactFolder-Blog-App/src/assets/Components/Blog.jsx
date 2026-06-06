import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {



    const navigate = useNavigate();
    const location = useLocation();


    let [data, setdata] = useState("");
    const [blog, setblog] = useState(null);
    const [error, seterror] = useState(false)
    const [loading, setloading] = useState(false);
    const [searchpost, setsearchpost] = useState(null)


   useEffect(()=>{
      (async () => {
        seterror(false);
        setloading(true);
        try{
        let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const localPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
        setblog([...localPosts, ...response.data]);
        }
        catch(error){
            setblog(null);
            seterror(true);
        }
        finally{
        setloading(false);       
        }

        
    })()
    }, [location])




  const onsearch = () => {
  if (!blog) {
    alert("Please wait, data is loading...");
    return;
  }

  const id = parseInt(data);

  if (isNaN(id)) {
    seterror(true);
    setsearchpost(null);
    return;
  }

  const found = blog.find((item) => item.id === id);

  if (found) {
    setsearchpost(found);
    seterror(false);
  } else {
    setsearchpost(null);
    seterror(true);
  }
  };
      



  const goBack = () => {
    setsearchpost(null);
    setdata("");
    seterror(false);
  };

    



  return (
    <div>
        

        <div className="container">


          <div className="header">
            <p>Blog App</p>
          </div>




         <div className="input_div">
           
            <div className="search_row">
               <input className="input_box" type="text" placeholder="Search Blog..."
               value={data}
               onChange={(dets)=>{
                setdata(dets.target.value);
                seterror(false);
               }}
            />

            <button className="search_btn"
            onClick={onsearch}
            >Search</button>

            </div>


          
            { error && <div className="inv_btn">
             <h4>Invalid Blog</h4>
           </div>
          }


          </div>



          <div className="blog_list">
            
            <div className="blog_listheading">
              <h2>------------------------------------------------------</h2>

            {loading && <h2>Loading Blogs...</h2>}


            {searchpost ? (
            <div className="result">
              <div><b>Post ID:</b> {searchpost.id}</div>

              <div>
                <button className="readmore_btn"
                 onClick={() => navigate(`/readmore/${searchpost.id}`)}
                >Read more</button>
              </div>

              <button  onClick={goBack}
              >Back</button>
            </div>
          ) : error ? (
            <div className="inv_btn">
              <h4>No Article Found</h4>
              <button onClick={goBack}>Back</button>
            </div>
          ) : (
            blog &&
            blog.slice(0, 4).map((element) => (
              <div className="result" key={element.id}>
                <div><b>Post ID:</b> {element.id}</div>
                <div>
                  <button className="readmore_btn"
                  onClick={() => navigate(`/readmore/${element.id}`)}
                  >Read more</button>
                </div>
              </div>
            ))
          )}
      
            </div>
          </div>


           <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button 
              className="add_btn"
              onClick={() => navigate("/add")}
            >
              Add Blog
            </button>
          </div> 

      </div>
    </div>
  )
}

export default Blog
