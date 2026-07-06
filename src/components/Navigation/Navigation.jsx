import clsx from "clsx";
import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

const getActiveClassnames = ({ isActive}) => clsx(isActive && styles.active)

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={getActiveClassnames}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getActiveClassnames}>
          Movies
        </NavLink>
      </nav>
    </header>     
  )
}

export default Navigation