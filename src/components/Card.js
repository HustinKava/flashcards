import React from 'react'

const Card = (props) => {

    function flip(e) {
        // If OS animations have been disabled
        var cardContainer = e.currentTarget;
        const flipCardInner = cardContainer.children[0].children[0]
        if (props.reduceMotion) {
            // Add reduced motion toggle in here
        }
        cardContainer.classList.toggle("is-flipped");
        flipCardInner.classList.toggle("is-flipped");

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
