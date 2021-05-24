import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'

function NavBar() {
  //add state for menu active

  return (
    <nav className="text-black m-5 p-5 text-md md:text-lg">
      <Link className='' to="/">Chase Westover</Link>
      <span className="hidden float-right space-x-10 sm:inline ">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/creative">Creative</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </span>
      <span className="-my-3 block sm:hidden float-right">
        <Hamburger size={18}/>
      </span>
    </nav>
  );
}
export default NavBar;