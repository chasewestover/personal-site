import React, { useState } from "react";
import "./Carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function Carousel({images}) {
  const [cardIdx, setCardIdx] = useState(0);
  const image = images[cardIdx];
  const total = images.length
  const goForward = () => {setCardIdx(cardIdx === total-1 ? 0 : cardIdx + 1)};
  const goBackward = () => {setCardIdx(cardIdx === 0 ? total-1 : cardIdx - 1)};

  return (
    <div className="mx-auto">
      <img className="h-52 sm:h-96 mx-auto" alt='' src={image} />
      <div>
        <span  className="mx-auto w-min flex float-left">
          <AiOutlineArrowLeft className='m-1' size={20} onClick={goBackward} />
          <AiOutlineArrowRight className='m-1' size={20} onClick={goForward} />
        </span>
        <span className="float-right">
          <small>Image {cardIdx + 1} of {total}.</small>
        </span>
      </div>
    </div>
  );
}

export default Carousel;
