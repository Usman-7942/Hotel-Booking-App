import React,{ useState } from 'react'
import styles from "./ImagesCircular.module.css"
const ImagesCircular = () => {

  const [index, setindex] = useState(0);

  const images = [
  {
    id: 1,
    title: "Mountain View",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Nature",
    width: 1920,
    height: 1080,
    size: "2.4MB",
    photographer: "John Smith",
    likes: 120,
    featured: true
  },

  {
    id: 2,
    title: "City Lights",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    category: "City",
    width: 1280,
    height: 720,
    size: "1.8MB",
    photographer: "Sarah Lee",
    likes: 95,
    featured: false
  },

  {
    id: 3,
    title: "Ocean Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Travel",
    width: 1600,
    height: 900,
    size: "2.1MB",
    photographer: "Michael Brown",
    likes: 210,
    featured: true
  },

  {
    id: 4,
    title: "Gaming Setup",
    url: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    category: "Technology",
    width: 1400,
    height: 800,
    size: "1.5MB",
    photographer: "David Wilson",
    likes: 80,
    featured: false
  },

  {
    id: 5,
    title: "Cute Cat",
    url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    category: "Animals",
    width: 1200,
    height: 1200,
    size: "900KB",
    photographer: "Emma Davis",
    likes: 300,
    featured: true
  }
  ];

  let visibleImages = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2)   % images.length]
  ]



   let prevfun = () => {
    setindex((index - 1 + images.length ) % images.length)
  }


  let nextfun = () => {
    setindex((index + 1)  % images.length)
  }

  return (
    <div>
      <div className={styles.maincontainer}>
        <button className={styles.prevbtn}
        onClick={prevfun}
        >{"<"}</button>

        <img className={styles.mainimages}
        src={images[index].url} alt={images[index].title} />


        <div className={styles.details}>
            <p className={styles.title}>{images[index].id}</p>
            <p className={styles.title}>{images[index].title}</p>
            <p className={styles.title}>{images[index].category}</p>
            <p className={styles.title}>{images[index].photographer}</p>
        </div>

        <div className={styles.wrapper}>
            <div className={styles.slider}>
                {
                  visibleImages.map((item)=> (
                    <img key={item.id}
                    className={styles.imagepreviewer}
                    src={item.url} alt={item.title} />
                        
                  ))
                }
            </div>
        </div>

        <button className={styles.nextbtn}
        onClick={nextfun}
        >{">"}</button>
      </div>
    </div>
  )
}

export default ImagesCircular
