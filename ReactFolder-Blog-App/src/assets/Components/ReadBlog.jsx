import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ReadBlog = () => {


  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
  const fetchPost = async () => {

    // ✅ Check localStorage first
    const localPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
    const localPost = localPosts.find((item) => item.id == id);

    if (localPost) {
      setPost(localPost);
      return;
    }

    // ✅ Otherwise fetch from API
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(res.data);
    } catch (err) {
      setPost(null);
    }
  };

  fetchPost();
  }, [id]);




  if (!post) return <h2>Loading...</h2>;



  return (
    <div className="container">
      <h2>Post Details</h2>

      <p><b>Post ID:</b> {post.id}</p>
      <p><b>User ID:</b> {post.userId}</p>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Body:</b> {post.body}</p>

      <button 
      
      onClick={() => navigate("/")}>Back</button>
    </div>
  )
}

export default ReadBlog
