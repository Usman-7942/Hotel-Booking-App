import React,{ useState } from 'react'
import "./ImageCircular.css"
const ImageCircular = () => {
  



  const [index, setindex] = useState(0);
  const images = [
  { id: 1, url: "https://picsum.photos/id/1015/800/400" },
  { id: 2, url: "https://picsum.photos/id/1016/800/400" },
  { id: 3, url: "https://picsum.photos/id/1025/800/400" },
  { id: 4, url: "https://picsum.photos/id/1035/800/400" },
  { id: 5, url: "https://picsum.photos/id/1043/800/400" },
  ];
 const maxIndex = images.length - 1;
 const visibleImages = [
  images[index % images.length],
  images[(index + 1) % images.length],
  images[(index + 2) % images.length]
 
];
  



  let next = () => {
  setindex((index + 1) % images.length);
  };

  let prev = () => {
  setindex((index - 1 + images.length) % images.length);
  };

  return (
    <div>
 
        <div className="container">
        <div className="image_div">
            <img src={images[index].url} alt="images" />
          <div className="slider_wrapper">
            <div className="slider_div"
          style={{
            transform : `translateX(-${index * 2}%)`
          }}
          >
            {visibleImages.map((img) => (
                <img  key={img.id}  src={img.url}  alt="img"
                  className="image_preview"
                />
              ))}
          </div>
          </div>
        </div>

        <div className="btns">
          <button onClick={prev}>{"<"}</button>

          <button onClick={next}>{">"}</button>
        </div>
        </div>




   




  
  
      
    </div>
  )
}

export default ImageCircular
