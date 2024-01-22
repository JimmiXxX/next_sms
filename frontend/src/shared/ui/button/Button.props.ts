import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode
} from 'react'

export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode
    color?: 'gray' | 'white' | 'btn_gray' | 'btn_white' | 'btn_bg_gray' | 'btn' | 'btn_bg_white'
    disabled?: boolean
}
