import styles from "../../shared/ui/button/Button.module.scss"

export const WhiteButton = ( props ) => {

    return (
        <>
            <button className={styles.btn}>{props.content}</button>
        </>
    )
}