import Container from 'components/container'
import styles from 'styles/footer.module.css'
import Social from 'components/social'
import Link from 'next/link'
import logo from 'images/logo.jpg'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.wrapper} style={{margin: '2em 0em 0em 0em'}}>
            <Container>
                <div className={styles.flexContain}>
                    Contact us
                    <Link href="https://igemkyotoofficial.github.io" legacyBehavior>
                        <figure style={{ width: '100px', margin: 'left' }}>
                            <Image
                                src={logo}
                                alt=""
                                layout="responsive"
                            />
                        </figure>
                    </Link>
                    Follow me
                    <Social />
                </div>
                <div>© 2023 iGEM Kyoto</div>
            </Container>
        </footer>
    )
}