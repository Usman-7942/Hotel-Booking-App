import React from 'react'

const Card = (props) => {    //props is like a parameter just like we 
  return (                   //pass in the function and Card is also
    <div>                    //a function we pass argument in App in Card <Card username/> to accept the username argument we have to pass the props as parameter
      <div className="card">
        <img src="{props.img}" alt="Profile Image"></img>
        <h1>{props.username}</h1>
        <p>
          {props.age}
        </p>
        <button>
          View Profile
        </button>
      </div>
    </div>
  )
}

export default Card
