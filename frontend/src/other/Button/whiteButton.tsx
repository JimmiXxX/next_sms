import styles from "./Button.module.css"

export const WhiteButton = ( props ) => {

    return (
        <>
            <button className={styles.btn}>{props.content}</button>
        </>
    )
}