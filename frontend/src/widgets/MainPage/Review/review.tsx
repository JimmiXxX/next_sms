import styles from "./review.module.scss"
import { Wrapper } from "@/shared/wrapper/wrapper";
import { ReviewList } from "./ReviewList/ReviewList";
import { articleList } from "@/entities/Article";
import { useState } from "react";
import { Htag } from "@/shared/ui/Htag/Htag";

export const Review = () => {

    const [articleIdx , SetArticleIdx] = useState<number> (0)

    const RightHandler = () => {
        if (articleList.items.length % 2 === 1)
            articleIdx >= articleList.items.length - 1 ? SetArticleIdx (0) : SetArticleIdx (articleIdx + 2)
        else
            articleIdx >= articleList.items.length - 2 ? SetArticleIdx (0) : SetArticleIdx (articleIdx + 2)

    }

    const LeftHandler = () => {
        if (articleList.items.length % 2 === 1)
            articleIdx <= 0 ? SetArticleIdx (articleList.items.length - 1) : SetArticleIdx (articleIdx - 2)
        else
            articleIdx <= 0 ? SetArticleIdx (articleList.items.length - 2) : SetArticleIdx (articleIdx - 2)
    }


    return (
        <Wrapper>
            <div id={ 'review' } className={ styles.review }>&nbsp;</div>
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <div className={ styles.firstBlock }>
                        <Htag tag={'h3Main'} color={'var(--white)'}>отзывы</Htag>
                        <div className={ styles.navButton }>
                            <button onClick={ LeftHandler } className={ styles.reviewButton }>&#8592;</button>
                            <button onClick={ RightHandler } className={ styles.reviewButton }>&#8594;</button>
                        </div>
                    </div>
                    <div className={ styles.secondBlock }>
                        <div className={ styles.firstReview }>
                            <ReviewList title={ articleList.items[articleIdx] }/>
                        </div>
                        <div className={ styles.imgReview }></div>
                    </div>
                    <div className={ styles.secondReviewBlock }>
                        { articleIdx !== articleList.items.length - 1 && (
                            <ReviewList title={ articleList.items[articleIdx + 1] }/>
                        ) }
                    </div>
                </div>
                <div className={ styles.lineReview }></div>
            </div>
        </Wrapper>
    )
}