import styles from "../review.module.scss";
import { Htag } from "@/shared/ui/Htag/Htag";

export const ReviewList = ( props ) => {

    return (
        <Htag tag={'text'} color={'var(--gray)'} className={styles.Htag}>{props.title.title}</Htag>
    )
}