import styles from "./Button.module.css"
import { ButtonHTMLAttributes , DetailedHTMLProps , ReactNode } from "react";
interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
}


export const BlackButton = ( props:ButtonProps ) => {



    return (
        <>
            <button onClick={props.onClick} className={styles.black_btn}>{props.content}</button>
        </>
    )
}