import styles from "./work.module.scss"
import { Wrapper } from "../../../shared/wrapper/wrapper";

export const Work = (props) => {

    return (
        <Wrapper>
            <div className={styles.content}>
                <div className={styles.firstImgBlock}>
                    <div className={styles.firstImg}></div>
                    <h3 className={styles.h3}>Наши работы</h3>
                </div>
                <div>
                    <div className={styles.twoImgBlock}>
                        <div className={styles.twoImg}></div>
                        <div className={styles.threeImg}></div>
                    </div>
                    <div className={styles.threeImgBlock}>
                        <div className={styles.fourImg}></div>
                        <div className={styles.flexImg}>
                            <div className={styles.fiveImg}></div>
                            <div className={styles.sixImg}></div>
                        </div>
                        <div className={styles.sevenImg}></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}