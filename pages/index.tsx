import Link from 'next/link'
import Container from 'components/container'

export default function Home() {
  return <>
    <Container>
      <h1>Welcome to iGEM Kyoto&apos;s Wiki</h1>
      <h2>Project Description</h2>
      <p style={{ margin: "2em auto" }}>
        <Link href="/description" className="btn btn-flat">
          <span>
            Click here
          </span>
        </Link>
      </p>
    </Container>
  </>
}