import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const AddBlog = () => {

  const navigate = useNavigate();


  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");




  const handleSubmit = async () => {

  if (!id || !title || !body) {
    alert("Please fill all fields");
    return;
  }

  const numericId = parseInt(id);

  if (isNaN(numericId)) {
    alert("Enter a valid numeric ID");
    return;
  }

  // ✅ Check API for existing ID
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${numericId}`
    );

    if (res.data && res.data.id) {
      alert("Post ID already exists in API. Try another ID.");
      return;
    }
  } catch (err) {
    // API returns error → means ID not found → OK
  }

  // ✅ Check localStorage
  const oldPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
  const existsLocal = oldPosts.find((item) => item.id === numericId);

  if (existsLocal) {
    alert("Post ID already exists locally. Try another ID.");
    return;
  }

  const newPost = {
    id: numericId,
    title,
    body,
    userId: 1
  };

  localStorage.setItem("newPosts", JSON.stringify([newPost, ...oldPosts]));

  alert("New article is added");

  navigate("/");
  };






  return (
    <div>
      
         <h2>Add New Blog</h2>



       <input 
        type="number"
        placeholder="Enter Post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />



      <input 
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Enter Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Add Blog</button>
      <button onClick={() => navigate("/")}>Back</button>


    </div>
  )
}

export default AddBlog
