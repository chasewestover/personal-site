import { Link } from "react-router-dom";

const getRandWithin = (high, low = 0) => low + Math.round(Math.random() * high);

function NavBar() {
  let canvas;
  const colors = ["red", "blue", "green", "yellow", "orange", "magenta", "cyan"]
  const canvWidth = 1200;
  const canvHeight = 600;

  function draw() { 

    if (canvas) {
      // const roll = Math.ceil(Math.random() * 3);
      let points = getRandWithin(8, 3);
      let innerWidth = getRandWithin(canvWidth, 200);
      let innerHeight = getRandWithin(canvHeight, 100);
      canvas.beginPath();
      while(points > 0) {
        canvas.lineTo(getRandWithin(innerWidth), getRandWithin(innerHeight));
        points--;
      }
      // canvas.moveTo(75, 50);
      // from random set of colors
      canvas.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      // totally random color option
      // canvas.fillStyle = `rgb(${getRandWithin(255)},${getRandWithin(255)},${getRandWithin(255)})`;
      canvas.fill();
    } else {
      //handling for no canvas feature
    }
  }

  const setCanvasRef = (elem) => {
    canvas = elem?.getContext?.('2d');
  };

  function erase() {
    if (canvas) {
      canvas.clearRect(0, 0, canvWidth, canvHeight)
    } else {
      //handling for no canvas feature
    }
  }

  // canvas.fillStyle = colours[i];  
  //         canvas.translate(centreX, centreY);  
  //         canvas.rotate(rotateAngle);  
  //         canvas.translate(-centreX, -centreY);  
  //         canvas.beginPath();  
  //         canvas.moveTo(centreX, centreY);  
  //         canvas.lineTo(centreX + radius, centreY);  
  //         canvas.arc(centreX, centreY, radius, startAngle, endAngle, false);  
  //         canvas.closePath();  
  //         canvas.fill(); 

  return (<div className="nav-container collapse-margins-large">
      <nav>
        <canvas ref={setCanvasRef} id="home-link-canvas" width={canvWidth} height={canvHeight}></canvas>
        <Link to="/" onMouseEnter={() => draw()} onMouseLeave={() => erase()}>
          Chase Westover
        </Link>
      </nav>
      </div>);
}
export default NavBar;

// OLD NAVBAR
    // <div className="nav-container text-black my-5 py-2 text-md md:text-lg mx-16 collapse-margins-large">
    //   <nav className="">
    //     <Link className="hover:text-white hover:bg-red-600" to="/">
    //       Chase Westover
    //     </Link>
    //     <span className="hidden float-right space-x-10 sm:inline ">
    //       <NavLink className="hover:text-white hover:bg-blue-600" to="/">
    //         Projects
    //       </NavLink>
    //       <NavLink
    //         className="hover:text-white hover:bg-green-600"
    //         to="/creative"
    //       >
    //         Creative
    //       </NavLink>
    //       <NavLink
    //         className="hover:text-white hover:bg-yellow-400"
    //         to="/contact"
    //       >
    //         Contact
    //       </NavLink>
    //     </span>
    //     <span className="-my-3 block sm:hidden float-right">
    //       <Hamburger toggled={dropdown} toggle={toggleDropdown} size={18} />
    //     </span>
    //   </nav>
    //   {dropdown && (
    //     <div className="index my-3 text-right flex flex-col items-end sm:hidden ">
    //       <NavLink
    //         onClick={toggleDropdown}
    //         className="py-2 w-min hover:text-white hover:bg-blue-600"
    //         to="/"
    //       >
    //         Projects
    //       </NavLink>
    //       <NavLink
    //         onClick={toggleDropdown}
    //         className="py-2 w-min hover:text-white hover:bg-green-600"
    //         to="/creative"
    //       >
    //         Creative
    //       </NavLink>
    //       <NavLink
    //         onClick={toggleDropdown}
    //         className="py-2 w-min hover:text-white hover:bg-yellow-400"
    //         to="/contact"
    //       >
    //         Contact
    //       </NavLink>
    //     </div>
    //   )}
    // </div>