import React from 'react';
import '../css/Bottom.css';

function Bottom(props) {
    return (
        <div className='bottom-container'>
            <button className='prev-arrow' onClick={props.prevSlide} />
            <button className='next-arrow' onClick={props.nextSlide} />
            <button className={props.randClassName} onClick={props.randSlide}>Shuffle</button> 
        </div>
    )
}

export default Bottom;
