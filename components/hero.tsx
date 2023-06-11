import styles from 'styles/hero.module.css'
import Container from 'components/container'

export default function Hero({ title, subtitle}:
  { title: any; subtitle: any; }) {
  return (
    <div className={styles.flexContain}>
      <Container large>
        <div className={styles.text} >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Container>
    </div>
  )
}