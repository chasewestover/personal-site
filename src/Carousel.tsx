import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ images }: { images: string[] }) {
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
    const onLeftAndRightKeys = (evt: KeyboardEvent) => {
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
    <div className="carousel">
      <img className="c-image" alt="" src={image} />
      {images.length > 1 && (
        <div className="carousel-switcher">
          <div className="arrows">
            <AiOutlineArrowLeft size={20} onClick={goBackward} />
            <AiOutlineArrowRight size={20} onClick={goForward} />
          </div>
          <div>
            <small>
              Image {cardIdx + 1} of {total}
            </small>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
