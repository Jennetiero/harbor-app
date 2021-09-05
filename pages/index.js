import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>harbor</title>
      </Head>
      <Navbar/>
      <section className={utilStyles.headingMd}>
       
      </section>
      </>
  )
}
