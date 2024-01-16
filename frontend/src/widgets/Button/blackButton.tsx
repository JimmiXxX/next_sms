import styles from "../../shared/ui/button/Button.module.scss"
import { ButtonHTMLAttributes , DetailedHTMLProps } from "react";
interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
}


export const BlackButton = ( props:ButtonProps ) => {

    return (
        <>
            <button onClick={props.onClick} disabled={props.disabled} className={styles.black_btn}>{props.content}</button>
        </>
    )
}