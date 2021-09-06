import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar({ children, home }) {
    return (
        <>
            <header className={styles.home}>
                <h1 className={styles.logo}>harbor</h1>
                <nav>
                    <ul className={styles.navLinks}>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                Home
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                About
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                Know Your Risks
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                For Work
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                Journal
                            </a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navLink}>
                                Shop
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
