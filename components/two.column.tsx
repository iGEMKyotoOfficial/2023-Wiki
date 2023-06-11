import styles from 'styles/two-column.module.css'

export function TwoColumn({ children }:{children:any}) {
    return (
        <div className={styles.flexContain}>
            {children}
        </div>
    )
}

export function TwoColumnMain({ children }:{children:any}) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export function TwoColumnSidebar({ children }:{children:any}) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}