import Link from 'next/link'
import Image from 'next/image'
import logo from 'images/logo.jpg'

export default function Logo() {
    return (
        <Link href="/" legacyBehavior>
            <figure style={{ width: '6vw', margin: 'left' }}>
                <Image
                    src={logo}
                    alt=""
                    layout="responsive"
                    sizes="10vw"
                />
            </figure>
        </Link>
    )
}