import styles from 'styles/container.module.css'

export default function Container({ children, large = false }:{children:any; large?:boolean;}) {
    return (
        <div className={large ? styles.large : styles.default }>
            {children}
        </div>
    )
}