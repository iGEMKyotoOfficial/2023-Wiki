import styles from 'styles/header.module.css'
import Container from 'components/container'
import Nav from 'components/nav'

export default function Header(){
    return (
    <header>
        <Container large>
            <div className={styles.flexContain}>
                <Nav />
            </div>
        </Container>
    </header>
    )
}