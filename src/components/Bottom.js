import React from 'react';
import '../css/Bottom.css';

function Bottom(props) {
    return (
        <div className='bottom-container'>
            <button className='prev-arrow' onClick={props.prevSlide} />
            <button className='next-arrow' onClick={props.nextSlide} />
        </div>
    )
}

export default Bottom;
