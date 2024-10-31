import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
import './styles.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink end={true} to="/books">Books</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
