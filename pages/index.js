import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar";
import AboutPage from "../components/aboutPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>harbor</title>
            </Head>
            <Navbar />
            <AboutPage />
            <section className={utilStyles.headingMd}></section>
        </>
    );
}
