import styles from "./validation.module.scss"

export const Validation = ({children}) => {

    return (
        <div className={styles.validation}>
            {children}
        </div>
    )
}