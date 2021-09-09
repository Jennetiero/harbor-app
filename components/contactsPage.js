import styles from "./contactsPage.module.css";
import Image from "next/image";

export default function ContactsPage({ children, home }) {
    return (
        <>
            <main className={styles.container}>
                <div>
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
                    <div className={styles.aboutImg}>
                    <Image
                        priority
                        src="/images/about.jpg"
                        width={1443}
                        height={270}
                        layout="intrinsic"
                    />
                    </div>
                </div>
            </main>
        </>
    );
}