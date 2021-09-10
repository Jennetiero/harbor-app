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
                    <button className={styles.playMarket}>Play Store</button>
                </div>
                </div>
            </div>
        </>
    );
}