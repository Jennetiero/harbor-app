import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <><nav className={styles.navbar}>
          <div className={styles.container}>
              <div className={styles.titleBox}>
                  <p className={styles.title}>harbor</p>
              </div>
              <ul className={styles.list}>
                  <li className={styles.navItem}><a href="#" className={styles.navLink}>Home <span class="sr-only">(current)</span></a></li>
                  <li className={styles.navItem}><a href="#" className={styles.navLink}>About</a></li>
                  <li className={styles.navItem}><a href="#" className={styles.navLink}>Know Your Risks</a></li>
                  <li className={styles.navItem}><a href="#" className={styles.navLink}>For Work</a></li>
                  <li className={styles.navItem}><a href="#" className={styles.navLink}>Journal</a></li>
                  <li className={styles.navItem}><a href="#" className={styles.navLink}>Shop</a></li>
              </ul>
          </div>
      </nav>
      <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={400}
              width={400}
            />
          </>
  )
}