import {useState} from 'react'
import Link from 'next/link'
import styles from 'src/styles/nav.module.css'

export default function Nav(){
    const [navIsOpen, setNavIsOpen] = useState(false)

    const toggleNav = () => {
        setNavIsOpen((prev) => !(prev))
    }

    const closeNav = () => {
        setNavIsOpen(false)
    }

    return(
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                  @media (max-width: 767px) {
                    body {
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                  }
                `}</style>
            )}

            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" legacyBehavior>
                            <a onClick={closeNav} className="home">Home</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
} 