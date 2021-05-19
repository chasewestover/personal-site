import { Link, NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="md:text-xl block m-10 text-md">
      <Link to="/">Chase Westover</Link>
      <span className="float-right space-x-10">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/creative">Creative</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </span>
    </nav>
  );
}
export default NavBar;