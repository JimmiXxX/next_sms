import styles from "../../shared/ui/MainPage/review/review.module.scss"
import { Wrapper } from "../../shared/wrapper/wrapper";

export const Review = () => {

    return (
        <Wrapper>
            <div id={'review'} className={styles.review}>&nbsp;</div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.firstBlock}>
                        <h3 className={styles.h3}>Отзывы</h3>
                        <div className={styles.navButton}>
                            <button className={styles.reviewButton}>&#8592;</button>
                            <button className={styles.reviewButton}>&#8594;</button>
                        </div>
                    </div>
                    <div className={styles.secondBlock}>
                        <div className={styles.firstReview}>
                            <h4 className={styles.h4}>Очень довольна работой мастера. Выполнено качественно, быстро
                                и самое главное – учли все мои пожелания. Точно приду ещё раз. Всем советую!</h4>
                        </div>
                        <div className={styles.imgReview}></div>
                    </div>
                    <div className={styles.secondReviewBlock}>
                    <h4 className={styles.h4}>Добрый день! Очень довольна вашей студией. Почему-то в Питере очень сложно найти салоны, где пользуются одноразовыми файлами для пилок, поэтому сразу записалась к вам, узнав, что используете именно такие пилки. Всё очень чисто, аккуратно и уютно. Инструменты стерильны, работники
                        в масках и перчатках. приятно порадовал розыгрыш, получила скидку на следующее посещение. Доброжелательный персонал
                        и большая палитра цветов.</h4>
                    </div>
                </div>
                <div className={styles.lineReview}></div>
            </div>
        </Wrapper>
    )
}