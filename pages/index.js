import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar";
import AboutPage from "../components/aboutPage";
import ContactsPage from "../components/contactsPage";
import Script from "next/script";
import BoxesPage from "../components/boxesPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>harbor</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=iso-8859-1"
                />
                <meta
                    name="description"
                    content="jppp UK Guide Higher Studies"
                />
                <meta
                    name="keywords"
                    content="UK guide higher studies ucas register apply clearing"
                />
                <script />
            </Head>

            <Navbar />
            <AboutPage />
            <BoxesPage />
            <ContactsPage />
            <section className={utilStyles.headingMd}></section>
        </>
    );
}
