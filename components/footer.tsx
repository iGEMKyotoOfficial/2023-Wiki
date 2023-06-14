import Container from 'components/container'
import styles from 'styles/footer.module.css'
import Social from 'components/social'
import Link from 'next/link'
import logo from 'images/logo.jpg'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.wrapper} style={{ margin: '2em 0em 0em 0em' }}>
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
                <div>© 2023 - Content on this site is licensed under a Creative Commons Attribution 4.0 International license.<br />
                The repository used to create this website is available at gitlab.igem.org/2023/kyoto.</div>
            </Container>
        </footer>
    )
}