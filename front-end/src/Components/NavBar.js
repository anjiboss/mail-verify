import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/verify">Verify</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
