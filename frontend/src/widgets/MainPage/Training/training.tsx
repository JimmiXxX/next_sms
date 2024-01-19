import styles from "./training.module.scss"
import { Wrapper } from "../../shared/wrapper/wrapper";
import { Button } from "../../shared/ui/button/Button";

export const Training = () => {

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.firstBlockContent}>
                    <h3 className={styles.h3}>Обучение</h3>
                    <h2 className={styles.h2}>Обучение <br/><i>мастеров</i></h2>
                    <h4 className={styles.h4}>Мы постоянно обучаем наших мастеров в лучших школах.</h4>
                    <Button color={'btn_bg_gray'}>Узнать подробнее</Button>
                </div>
                <div className={styles.imgBlock}></div>
            </div>
        </Wrapper>
    )
}