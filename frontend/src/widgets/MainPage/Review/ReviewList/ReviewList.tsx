import styles from "../review.module.scss";

export const ReviewList = ( props ) => {

    return (
        <h4 className={ styles.h4 }>{props.title.title}</h4>
    )
}