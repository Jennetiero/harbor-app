import Image from "next/image";
import styles from "./aboutPage.module.css";

export default function AboutPage({ children, home }) {
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.headQuote}>
                    The right plan for when things don't go as planned
                </h1>
                <h4 className={styles.quote}>
                    The app that makes disaster preparedness easy and
                    accessible.
                    <br />
                    Because sometimes tomorrow doesn't look like today.
                </h4>
                <div>
                    <button className={styles.appStore}>App Store</button>
                    <button className={styles.playMarket}>Play Store</button>
                </div>
                <div className={styles.container}>
                    <Image
                        quality={100}
                        src="/images/profile.jpg"
                        className={styles.profile}
                        height={1047}
                        width={721}
                    />
                </div>
            </div>
        </>
    );
}
