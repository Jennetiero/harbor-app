import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar";
import AboutPage from "../components/aboutPage";
import ContactsPage from "../components/contactsPage";
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
                <meta name="description" content="harbor app made for learning NextJS" />
                <html lang="en"></html>
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
