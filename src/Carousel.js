import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ images }) {
  const [cardIdx, setCardIdx] = useState(0);
  const image = images[cardIdx];
  const total = images.length;
  const goForward = () => {
    setCardIdx(cardIdx === total - 1 ? 0 : cardIdx + 1);
  };
  const goBackward = () => {
    setCardIdx(cardIdx === 0 ? total - 1 : cardIdx - 1);
  };

  useEffect(() => {
    const onLeftAndRightKeys = (evt) => {
      if (evt.code === "ArrowRight") {
        goForward();
      } else if (evt.code === "ArrowLeft") {
        goBackward();
      }
    };
    document.addEventListener("keydown", onLeftAndRightKeys);
    return () => document.removeEventListener("keydown", onLeftAndRightKeys);
  });

  return (
    <div >
      <img className="c-image" alt="" src={image} />
      {images.length > 1 && (
        <div>
          <span>
            <AiOutlineArrowLeft
              size={20}
              onClick={goBackward}
            />
            <AiOutlineArrowRight
              size={20}
              onClick={goForward}
            />
          </span>
          <span >
            <small>
              Image {cardIdx + 1} of {total}
            </small>
          </span>
        </div>
      )}
    </div>
  );
}

export default Carousel;
