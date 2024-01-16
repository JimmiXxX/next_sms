import styles from "../../shared/ui/button/Button.module.scss"

export const GrayBtn = ( props ) => {

    return (
        <>
            <button className={styles.grayBtn}>{props.content}</button>
        </>
    )
}