import Image from "next/image";
import styles from "./boxesPage.module.css";

export default function BoxesPage({ children, home }) {
    return (
        <>
<div className={styles.container}>
<div className={styles.boxes}>
                    <div className={styles.boxOne}>
                        <Image
                            priority
                            src="/images/imageBox.jpg"
                            className={styles.img}
                            width={360}
                            height={321}
                        />
                        <h2 className={styles.textBox}>
                            Create your family's emergency plan
                        </h2>
                        <h4 className={styles.boxQuote}>
                            Our app is tailored to you, your family and your
                            little dog, too. We tell you what you need to stay
                            safe from hurricanes to wildfires and everything in
                            between.
                        </h4>
                    </div>
                    {/* 2ND BOX */}
                    <div className={styles.boxTwo}>
                        <h2 className={styles.blueText}>
                            Access and share important information, even offline
                        </h2>
                        <br />
                        <h4 className={styles.blueQuote}>
                            View critical information, family plans, and
                            documents at the push of a button, both online and
                            offline - no worries if cell towers go out.
                        </h4>
                        <Image
                            priority
                            src="/images/Rectangle.jpg"
                            className={styles.blueImg}
                            width={360}
                            height={391}
                        />
                    </div>
                    {/* 3RD BOX */}
                    <div className={styles.boxThree}>
                        <Image
                            priority
                            src="/images/greenBox.jpg"
                            className={styles.img}
                            width={360}
                            height={384}
                        />

                        <h2 className={styles.textBox}>
                            Know exactly what to do when an emergency strikes
                        </h2>
                        <br />
                        <h4 className={styles.boxQuote}>
                            When disasters happen, harbor automatically
                            activates your readiness plan and sends you
                            personalized, on-demand info when it matters the
                            most.
                        </h4>
                    </div>
                    {/* 4TH BOX */}
                    <div className={styles.boxFour}>
                        <h2 className={styles.blueText}>
                            Get peace-of-mind with automatic risk assessments
                        </h2>
                        <h4 className={styles.blueQuote}>
                            We use data from NOAA, FEMA, and USGS to pinpoint
                            what your household is at risk for. No more
                            guessing.
                        </h4>
                        <Image
                            priority
                            src="/images/yellowBox.jpg"
                            className={styles.blueImg}
                            width={360}
                            height={346}
                        />
                    </div>
                </div>
                <h1 className={styles.headQuote}>
                    Reimagining readiness for life's uncertain moments.
                </h1>
                <h4 className={styles.quote}>
                    The app that makes disaster preparedness easy and
                    accessible.{" "}
                </h4>
                <div className={styles.reviewBox}>
                
                    <h4 className={styles.textReview}>
                        It's beautiful, easy to use, and is genuinely growing my
                        confidence for crisis preparation.
                    </h4>
                    <div className={styles.starsImg}>
                        <Image
                            priority
                            src="/images/stars.jpg"
                            width={131}
                            height={23}
                        />
                    </div>
                    <h4 className={styles.textReview}>iOS Beta Tester</h4>
                </div>
                </div>
                </>
    );
}
