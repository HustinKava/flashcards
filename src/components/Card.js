import React, {useState} from 'react'

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)

    function flip() {
        if(!isFlipped){
            setIsFlipped(true)
        } else {
            setIsFlipped(false)
        }
    };




    return (
        <div
            className={"flash-card-container " + (isFlipped ? "is-flipped" : "")} 
            onClick={flip}
        >
            <button className={"flip-card-btn " + (isFlipped ? "curl-bottom-left" : "curl-bottom-right")}>
                {/* container required to flip container and content together */}
                <div className={"flip-card-inner " + (isFlipped ? "is-flipped" : "")}>
                    <div className="flip-card-front">
                        <img
                            src={props.alt}
                            alt={props.alt}
                        />
                        <p>Word here</p>
                    </div>
                    {/* Content on the back of the card goes in flip-card-back */}
                    <div className="flip-card-back">
                        <p>Information about card front here</p>
                    </div>
                </div>
            </button>
        </div>

    )
}

export default Card
