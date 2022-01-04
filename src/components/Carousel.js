import React, { useState } from 'react'
import Card from './Card'

const Carousel = (props) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => { //Next Carousel button
    setCurrent(current === props.items.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => { //Prev Carousel button
    setCurrent(current === 0 ? props.items.length - 1 : current - 1);
  };

  return (
    <>
      {props.items.map((items, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={items.index}

          >
            {index === current && ( //Carousel items will appear below:
              <Card
              key={items.index}
              src={items.img}
              alt={items.img}
              />
              // <img src={items.img} alt={items.img} />
            )}
          </div>
        )
      })}
      <button className='prev-arrow' onClick={prevSlide} />
      <button className='next-arrow' onClick={nextSlide} />
    </>
  )
}

export default Carousel
