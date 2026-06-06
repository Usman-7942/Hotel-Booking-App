import { useState } from 'react';
import Card from './assets/Components/Card';
import Users from './assets/Components/Users';
import './App.css';

function App() {
  
const jobOpenings = [
  {
    logo: "https://cdn.vectorstock.com/i/1000v/47/20/google-logo-vector-50014720.jpg",
    company: "Google",
    datePost: "5 days ago",
    type: "Full Time",
    level: "Junior Level",
    pay: "$45/hr",
    location: "Lahore, Pakistan",
    post: "Frontend"
  },
  {
    logo: "https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png",
    company: "Apple",
    datePost: "2 weeks ago",
    type: "Full Time",
    level: "Senior Level",
    pay: "$85/hr",
    location: "Karachi, Pakistan",
    post: "Backend"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    company: "Meta",
    datePost: "10 days ago",
    type: "Part Time",
    level: "Junior Level",
    pay: "$40/hr",
    location: "Islamabad, Pakistan",
    post: "Frontend"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    company: "Amazon",
    datePost: "3 weeks ago",
    type: "Full Time",
    level: "Senior Level",
    pay: "$75/hr",
    location: "Sheikhupura, Pakistan",
    post: "Backend"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
    company: "Netflix",
    datePost: "1 week ago",
    type: "Part Time",
    level: "Senior Level",
    pay: "$90/hr",
    location: "Faisalabad, Pakistan",
    post: "Frontend"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    company: "Microsoft",
    datePost: "6 days ago",
    type: "Full Time",
    level: "Junior Level",
    pay: "$50/hr",
    location: "Multan, Pakistan",
    post: "Backend"
  },
  {
    logo: "https://fabrikbrands.com/wp-content/uploads/Tesla-Logo-1-1155x770.png",
    company: "Tesla",
    datePost: "4 weeks ago",
    type: "Full Time",
    level: "Senior Level",
    pay: "$80/hr",
    location: "Dubai, UAE",
    post: "Frontend"
  },
  {
    logo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    company: "NVIDIA",
    datePost: "8 days ago",
    type: "Part Time",
    level: "Junior Level",
    pay: "$55/hr",
    location: "Berlin, Germany",
    post: "Backend"
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    company: "Adobe",
    datePost: "12 days ago",
    type: "Full Time",
    level: "Senior Level",
    pay: "$70/hr",
    location: "Toronto, Canada",
    post: "Frontend"
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.jpg",
    company: "Spotify",
    datePost: "2 days ago",
    type: "Part Time",
    level: "Junior Level",
    pay: "$42/hr",
    location: "Stockholm, Sweden",
    post: "Backend"
  }
];


//index give a unique value to each element to
//identify each div element which is returning
//with unique index number

  return (
    <div className="parent">
        {
          jobOpenings.map(function(ele, index){
            return <div>
                <Card key={index} logo={ele.logo} company={ele.company}  datePost={ele.datePost}
              post={ele.post}  type={ele.type}  level={ele.level}
              pay={ele.pay}  location={ele.location}/>
            </div>
          })
        }      
    </div>
  )
}

export default App
