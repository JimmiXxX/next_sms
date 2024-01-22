import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface HtagProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    tag: 'h1' | 'h1Bold' | 'h2' | 'h2Bold' | 'h3' | 'h3Main' | 'text'
    children: ReactNode
}
