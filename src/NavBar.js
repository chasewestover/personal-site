import { Link, NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="block mx-10 my-10 text-2xl">
      <Link className="" to="/">Chase Westover</Link>
      <span className="float-right space-x-10">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/creative">Creative</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </span>
    </nav>
  );
}
export default NavBar;