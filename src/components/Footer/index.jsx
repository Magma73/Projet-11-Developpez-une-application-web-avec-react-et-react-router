import { Link } from 'react-router-dom'
import logo from '../../assets/logo-kasa-footer.svg'
import styles from './Footer.module.css'

function Footer() {
    return (

        <footer className={styles.footer}>
            <div>
                <Link to="/">
                    <img src={logo} alt='logo-kasa' className={styles.logo} />
                </Link>
            </div>

            <p className={styles.copy}>© 2020 Kasa. All rights reserved</p>
        </footer>

    )
}

export default Footer