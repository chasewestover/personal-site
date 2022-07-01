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
    <div className="mx-auto mb-4">
      <img className="c-image mx-auto" alt="" src={image} />
      {images.length > 1 && (
        <div className="sm:w-1/2 mx-auto">
          <span className="mx-auto w-min flex float-left">
            <AiOutlineArrowLeft
              className="my-1 mx-3"
              size={20}
              onClick={goBackward}
            />
            <AiOutlineArrowRight
              className="my-1 mx-3"
              size={20}
              onClick={goForward}
            />
          </span>
          <span className="float-right">
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
