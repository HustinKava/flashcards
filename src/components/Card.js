import React from 'react'

const Card = (props) => {

    function flip(e) {
        var card = e.currentTarget;
        if (card.classList.contains("flash-card-container")) {
            if(card.children[0].classList.contains("curl-bottom-right")){
                card.children[0].classList.remove("curl-bottom-right")
                card.children[0].children[0].classList.toggle("is-flipped")
            } else {
                card.children[0].children[0].classList.toggle("is-flipped")
            }
    }
};


return (
    <div
        className="flash-card-container"
        onClick={flip}
    >
        <button className="flip-card-btn curl-bottom-right">
            {/* container required to flip container and content together */}
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        src={props.src}
                        alt={props.alt}
                    />
                    <p>{props.alt}</p>
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
