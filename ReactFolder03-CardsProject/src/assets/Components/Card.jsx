import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
          <img src={props.logo} alt="CompanyLogo-Image" />
          <button>Save  </button>
        </div>
          <div className="center">
            <h3>{props.company} <span>{props.datePost}</span></h3>    
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.type}</h4>
              <h4>{props.level}</h4>
            </div>
          </div>
        </div>
            <div className="bottom">
              <div className="bottomtext">
                  <h3>{props.pay}</h3>
                  <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
              
            </div>
      </div>
    </div>
  )
}

export default Card
