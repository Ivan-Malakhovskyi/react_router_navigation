import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Головна
      </NavLink>

      <NavLink
        to="/authors"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Автори
      </NavLink>

      <NavLink
        to="/books"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Книги
      </NavLink>

      <NavLink
        to="/table"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
      >
        Таблиця
      </NavLink>
    </nav>
  );
}
