import styles from "./contactsPage.module.css";
import Image from "next/image";

export default function ContactsPage({ children, home }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.boxWrapper}>
                    <h1 className={styles.headQuote}>
                    Our mission is to encourage readiness for all
                    </h1>
                    <h4 className={styles.quote}>
                    It's our dream that one day, everyday readiness will be
                    quite ordinary - like brushing your teeth.
                        <br />A little bit of effort with a big payoff.
                    </h4>
                    <button className={styles.infoButton}>
                    Learn more about us
                    </button>
                </div>
                <div className={styles.banner}>
                    <h1 className={styles.text}>
                     Stay one step ahead with harbor
                    </h1>
                    <div>
                        <button className={styles.appStore}>App Store</button>
                        <button className={styles.playMarket}>
                        Play Store
                        </button>
                    </div>
                    <div className={styles.profile}>
                        <Image
                            quality={100}
                            src="/images/phone.jpg"
                            height={384}
                            width={416}
                        />
                    </div>
                </div>
                <h1 className={styles.headText}>
                    Stay one step ahead with harbor
                </h1>
                <h4 className={styles.textQuote}>
                    Up high. Down low. Tips on how to find your way through any
                    disaster
                    <br />
                    in the best way possible: together. And be the first in line
                    for Android.
                </h4>
                <input
                    className={styles.inputForm}
                    placeholder="Email address"
                ></input>
                <button className={styles.confirmButton}>SIGN UP</button>
                <br />
                <h1 className={styles.logo}>harbor</h1>
                <ul className={styles.list}></ul>
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
                    </a>{" "}
                </li>
            </div>
        </>
    );
}
