import styles from "./Button.module.css"

export const GrayBtn = ( props ) => {

    return (
        <>
            <button className={styles.grayBtn}>{props.content}</button>
        </>
    )
}