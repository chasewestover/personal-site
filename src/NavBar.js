import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import { useToggle } from './hooks';

function NavBar() {
  //add state for menu
  const [dropdown, toggleDropdown] = useToggle();

  return (
    <div className='text-black my-5 py-2 text-md md:text-lg'>
      <nav className="">
        <Link className='' to="/">Chase Westover</Link>
        <span className="hidden float-right space-x-10 sm:inline ">
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/creative">Creative</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </span>
        <span className="-my-3 block sm:hidden float-right">
          <Hamburger toggled={dropdown} toggle={toggleDropdown} size={18}/>
        </span>
      </nav>
      {dropdown && <div className="my-3 text-right flex flex-col items-end w-full float-right sm:hidden ">
          <div className='py-2 w-min'><NavLink  to="/">Projects</NavLink></div>
          <NavLink className='py-2 w-min' to="/creative">Creative</NavLink>
          <NavLink className='py-2 w-min' to="/contact">Contact</NavLink>
        </div>}
    </div>
  );
}
export default NavBar;