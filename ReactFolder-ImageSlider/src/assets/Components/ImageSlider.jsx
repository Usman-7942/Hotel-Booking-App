import React,{ useState } from 'react'
import "./ImageSlider.css"


const ImageSlider = () => {

   const images = [
    {
      id: 1,
      url: "https://picsum.photos/id/1015/600/300",
      title: "Mountain",
    },
    {
      id: 2,
      url: "https://picsum.photos/id/1016/600/300",
      title: "Forest",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/1018/600/300",
      title: "River",
    },
    {
      id: 4,
      url: "https://picsum.photos/id/1020/600/300",
      title: "City",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // 👉 Next Button
  const nextSlide = () => {
    if (!(index === images.length -1)) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="image_slider">
            <img src={images[index].url}  alt="images" />
             <h2>{images[index].title}</h2>
        </div>
        <div className="btns">
          <button className="prev_btn"
            onClick={prevSlide}
            disabled = { index === 0}
            style={{
                opacity: index === 0 ? 0.5 : 1
            }} 
          > ⬅ Prev</button>

          <button className="next_btn"
          onClick={nextSlide}
          disabled = { index === images.length -1}
          style={{
              opacity: index === images.length -1 ? 0.5 : 1
          }} 
          >Next ➡ </button>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
