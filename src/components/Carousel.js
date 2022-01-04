import React, { useState } from 'react';
import Card from './Card';
import Top from './Top';
import Bottom from './Bottom';

function Carousel(props) {

  const [current, setCurrent] = useState(0)

  const nextSlide = () => { //Next Carousel button
    setCurrent(current === props.items.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => { //Prev Carousel button
    setCurrent(current === 0 ? props.items.length - 1 : current - 1);
  };

  function randSlide() { //Random Carousel button
    for (let i = props.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = props.items[i];
      props.items[i] = props.items[j];
      props.items[j] = temp;
    }
  }

  return (
    <>
      <Top
        instruction={props.instruction}
      />
      {props.items.map((items, index) => {
        return (
          <>
            {index === current && ( //Carousel items will appear below:
              <div
                className={'carousel-container'}
                key={items.index}
              >
                <Card
                  key={items.index}
                  src={items.img}
                  alt={items.textValue}
                />
              </div>
            )}
          </>
        )
      })}
      <Bottom
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        shufftleSlide={randSlide}
      />
    </>
  )
}

export default Carousel

