import Hero from './components/hero/Hero'
import Nav from './components/nav/Nav'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <Hero/>
    </main>
  )
}
