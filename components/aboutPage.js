import Image from "next/image";
import styles from "./aboutPage.module.css";

export default function AboutPage({ children, home }) {
    return (
        <>
            <main className={styles.wrapper}>
                <p className={styles.headQuote}>
                    Reimagining readiness for life's uncertain moments.
                </p>
                <h4 className={styles.quote}>
                    The app that makes disaster preparedness easy and
                    accessible.
                    <br />
                    Because sometimes tomorrow doesn't look like today.
                </h4>
                <div className={styles.button}>
                    <button className={styles.appStore}>App Store</button>
                    <button className={styles.playMarket}>Play Store</button>
                </div >
                <div className={styles.profile}>
                    <Image
                    style="width:100%;"
                        quality={100}
                        src="/images/profile.jpg"
                        alt=""
                        height={1047}
                        width={721}
                    />
                </div>
                <h1 className={styles.headQuote}>
                    The right plan for when things don't go as planned
                </h1>
                <h4 className={styles.quote}>
                    The app that makes disaster preparedness easy and
                    accessible.
                    <br />
                    Because sometimes tomorrow doesn't look like today.
                </h4>
                


                
            </main>
        </>
    );
}
