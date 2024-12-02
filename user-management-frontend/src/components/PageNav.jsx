import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">User List</NavLink>
        </li>
        <li>
          <NavLink to="/add-user">add-user</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
