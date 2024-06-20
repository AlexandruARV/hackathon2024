import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useState } from "react";

function AppNav() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="products">products</NavLink>
        </li>
        <li>
          <NavLink to="articles">articles</NavLink>
        </li>
        <li>
          <NavLink to="quizzes">quizzes</NavLink>
        </li>
        {isLogged ? (
          <li>
            <NavLink to="login">login</NavLink>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </nav>
  );
}

export default AppNav;
