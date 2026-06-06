import React,{ useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./HeroSection.module.css"
const HeroSection = () => {

  

  const navigate = useNavigate();

  
  const [currentindex, setcurrentindex] = useState(0);

  const images = [
  {
    id: 1,
    name: "Margherita Pizza",
    url: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    url: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Truffle Mushroom Pizza",
    url: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    url: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Veggie Pizza",
    url: "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Cheese Burst Pizza",
    url: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    name: "Spicy Chicken Pizza",
    url: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    name: "Loaded Meat Pizza",
    url: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    name: "Four Cheese Pizza",
    url: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    name: "Farmhouse Pizza",
    url: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

  useEffect(() => {
  if (images.length === 0) return;

  const interval = setInterval(() => {
    setcurrentindex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, [images]);

  return (
    <div>
      <div className={styles.container}>
        {
          images.length > 0 && (
            <img src={images[currentindex].url} alt="images"
            />
            )
         }
        <div className={styles.textdiv}>
         
            <p className={styles.heading}>Delicious Pizza Dellivered Fast</p>
            <p className={styles.maintext}>"Hot and Fresh in 30 Minutes"</p>
            <button className={styles.order_btn}
            onClick={() => navigate("/menu")}
            >Order now</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
