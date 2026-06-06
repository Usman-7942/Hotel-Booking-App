import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.element.url} target={"_blank"}>
            <img src={props.element.download_url}  alt="User images" />
            <div> <h2>{props.element.author}</h2></div>
          </a>
      
    </div>
  )
}

export default Card
