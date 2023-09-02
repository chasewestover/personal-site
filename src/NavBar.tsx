import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const getRandWithin = (high: number, low = 0) =>
  low + Math.round(Math.random() * high);

const colors = ["red", "blue", "green", "yellow", "orange", "magenta", "cyan"];

const canvWidth = 1200;
const canvHeight = 600;

function NavBar() {
  const [hovering, setHovering] = useState(false);
  const canvas = useRef<CanvasRenderingContext2D | null>(null);

  function draw() {
    if (canvas.current) {
      setHovering(true);
      let points = getRandWithin(8, 3);
      let innerWidth = getRandWithin(canvWidth, 200);
      let innerHeight = getRandWithin(canvHeight, 100);
      canvas.current?.beginPath();
      while (points > 0) {
        canvas.current.lineTo(
          getRandWithin(innerWidth),
          getRandWithin(innerHeight)
        );
        points--;
      }
      canvas.current.fillStyle =
        colors[Math.floor(Math.random() * colors.length)];
      // totally random color option
      // canvas.current.fillStyle = `rgb(${getRandWithin(255)},${getRandWithin(255)},${getRandWithin(255)})`;
      canvas.current.fill();
    }
  }

  function erase() {
    setHovering(false);
    canvas.current?.clearRect(0, 0, canvWidth, canvHeight);
  }

  return (
    <div className="nav-container collapse-margins-large" style={{ zIndex: 5 }}>
      <nav>
        <canvas
          ref={(elem) => (canvas.current = elem?.getContext?.("2d") || null)}
          id="home-link-canvas"
          width={canvWidth}
          height={canvHeight}
          style={{ display: hovering ? "block" : "none" }}
        />
        <Link to="/" onMouseEnter={() => draw()} onMouseLeave={() => erase()}>
          {"Chase Westover"}
        </Link>
      </nav>
    </div>
  );
}
export default NavBar;
