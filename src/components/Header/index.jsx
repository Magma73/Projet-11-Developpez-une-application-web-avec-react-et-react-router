import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.containerLogo}>
                <Link to='/'>
                    <img src='/assets/logo-kasa-header.svg' alt='logo-kasa' className={styles.logo} />
                </Link>
            </div>

            <nav className={styles.nav}>
                <NavLink
                    className={styles.home}
                    to="/"
                    style={({ isActive }) => {
                        return {
                            textDecoration: isActive ? "underline" : "none",
                        };
                    }}
                >
                    Accueil
                </NavLink>

                <NavLink
                    className={styles.about}
                    to="/apropos"
                    style={({ isActive }) => {
                        return {
                            textDecoration: isActive ? "underline" : "none",
                        };
                    }}
                >
                    À propos
                </NavLink>
            </nav>

        </header>
    )

}

export default Header