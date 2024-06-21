import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useState } from "react";

function AppNav() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="articles">Articles</NavLink>
        </li>
        <li>
          <NavLink to="quizz">Quizzes</NavLink>
        </li>
        {isLogged ? (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </nav>
  );
}

export default AppNav;
