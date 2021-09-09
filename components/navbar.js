import Image from "next/image";
import styles from "./navbar.module.css";


export default function Navbar({ children, home }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerBody}>
                        <h1 className={styles.logo}>harbor</h1>
                        <div id="header-burger" className={styles.headerBurger}>
                            <span className={styles.spanBurger}></span>
                        </div>
                        <nav className={styles.headerMenu}>
                            <ul className={styles.headerList}>
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
                    </div>
                </div>
            </header>
        </>
    );
}

{/* <header className={styles.header}>
<div className={styles.container}>
<div className={styles.headerBody}>
    <h1 className={styles.logo}>harbor</h1>
    <div className={styles.headerBurger}>
        <span className={styles.spanBurger}></span>
    </div>
    <nav className={styles.headerMenu}>
        <ul className={styles.headerList}>
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
</div>
</div>
</header>  */}
