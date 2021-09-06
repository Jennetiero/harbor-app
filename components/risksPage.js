import styles from "./risksPage.module.css";
import Image from "next/image";

export default function RisksPage({ children, home }) {
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
                <div className={styles.boxed}>
                    <Image
                        priority
                        src="/images/imageBox.jpg"
                        className={styles.bags}
                        width={360}
                        height={321}
                    />
                    <h2 className={styles.textBox}>
                        Create your family's emergency plan
                    </h2>
                    <h4 className={styles.boxQuote}>
                        Our app is tailored to you, your family and your little
                        dog, too. We tell you what you need to stay safe from
                        hurricanes to wildfires and everything in between.
                    </h4>
                </div>
            </div>
        </>
    );
}
