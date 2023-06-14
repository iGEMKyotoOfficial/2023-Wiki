import Container from 'components/container'
import Logo from 'components/logo'
import Navbar from 'components/nav2'
import styles from 'styles/header.module.css'

export default function Header(){
    return (
    <header>
        <Container large>
            <div className={styles.flexContain}>
                <Logo />
                <Navbar />
            </div>
        </Container>
    </header>
    )
}