import Container from 'components/container'
import styles from 'styles/footer.module.css'
import Social from 'components/social'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContain}>
                    <Link href="/" legacyBehavior>
                        <a className="home">iGEM Kyoto</a>
                    </Link>
                    <br />
                    Follow me
                    <Social />
                    © 2023 iGEM Kyoto
                </div>
            </Container>
        </footer>
    )
}