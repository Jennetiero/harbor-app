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
                    <div className={styles.button}>
                        <h1 className={styles.text}>
                            Stay one step ahead with harbor
                        </h1>

                        <button className={styles.appStore}>App Store</button>
                        <button className={styles.playMarket}>
                            Play Store
                        </button>
                        
                    </div>
                    <div className={styles.profile}>
                            <Image
                                src="/images/phone.jpg"
                                width={490}
                                height={407}
                            />
                        </div>
                </div>
                <h1 className={styles.headText}>Join harbor high fives</h1>
                <h4 className={styles.textQuote}>
                    Up high. Down low. Tips on how to find your way through any
                    disaster
                    <br />
                    in the best way possible: together. And be the first in line
                    for Android.
                </h4>
                <div className={styles.email}>
                    <input
                        className={styles.inputForm}
                        placeholder="Email address"
                    ></input>
                    <button className={styles.confirmButton}>SIGN UP</button>
                </div>
                <br />
                <h1 className={styles.logo}>harbor</h1>
            </div>
        </>
    );
}
