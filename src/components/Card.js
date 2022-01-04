import React from 'react'

const Card = (props) => {

    return (
        <div className="flash-card-container">
            <button className="flip-card-btn curl-bottom-right">
                {/* container required to flip container and content together */}
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img 
                        src={props.alt} 
                        alt={props.alt}
                        />
                        <p>Word here</p>
                    </div>
                    {/* Content on the back of the card goes in flip-card-back */}
                    {/* <div class="flip-card-back ">
                        <h1>Giraffes</h1>
                        <p>Live in the savannahs</p>
                    </div> */}
                </div>
            </button>
        </div>
 
  )
}

export default Card
