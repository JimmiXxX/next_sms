import styles from "./Htag.module.scss"
import { HtagProps } from "@/shared/ui/Htag/Htag.props";
import cn from 'classnames'

export const Htag = (
    {
        tag ,
        className ,
        children ,
        color ,
        ...props
    }: HtagProps
): JSX.Element => {
    switch (tag) {
        case 'h1':
            return (
                <h1 className={ cn (styles.h1 , className) } style={ { color } }{ ...props }>{ children }</h1>
            )
        case 'h1Bold':
            return (
                <h1 className={ cn (styles.h1Bold , className) } style={ { color } }{ ...props }>{ children }</h1>
            )
        case 'h2':
            return (
                <h2 className={ cn (styles.h2 , className) } style={ { color } } { ...props }>{ children }</h2>
            )
        case 'h2Bold':
            return (
                <h2 className={ cn (styles.h2Bold , className) } style={ { color } } { ...props }>{ children }</h2>
            )
        case 'h3':
            return (
                <h3 className={ cn (styles.h3 , className) } style={ { color} } { ...props }>{ children }</h3>
            )
        case 'h3Main':
            return (
                <h3 className={ cn (styles.h3Main , className) } style={ { color } } { ...props }>{ children }</h3>
            )
        case 'text':
            return (
                <div className={ cn (styles.text , className) } style={ { color } } { ...props }>{ children }</div>
            )
    }


}