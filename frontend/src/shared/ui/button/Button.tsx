import styles from "./Button.module.scss"
import cn from "classnames"
import { ButtonProps } from "./Button.props";

export const Button = ( {
                            children ,
                            color = 'btn',
                            className ,
                            disabled = undefined ,
                            ...props
                        }:ButtonProps)=> {

    return (
        <button
        className={cn(styles.btn, className,{
            [styles.gray]: color === 'gray',
            [styles.white]: color === 'white',
            [styles.btn_gray]: color === 'btn_gray',
            [styles.btn_white]: color === 'btn_white',
            [styles.btn_bg_gray]: color === 'btn_bg_gray',
            [styles.btn]: color === 'btn',
        })}
        disabled={disabled}
            {...props}
        >
            { children }
        </button>
    )
}