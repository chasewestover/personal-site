import { Link, NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="block m-10 text-2xl">
      <Link to="/personal-site/">Chase Westover</Link>
      <span className="float-right space-x-10">
        <NavLink to="/personal-site/work">Work</NavLink>
        <NavLink to="/personal-site/creative">Creative</NavLink>
        <NavLink to="/personal-site/contact">Contact</NavLink>
      </span>
    </nav>
  );
}
export default NavBar;