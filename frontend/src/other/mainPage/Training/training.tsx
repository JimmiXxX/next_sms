import styles from "./ui/training.module.css"
import { Wrapper } from "../../wrapper/wrapper";
import { BlackButton } from "../../Button/blackButton";

export const Training = () => {

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.firstBlockContent}>
                    <h3 className={styles.h3}>Обучение</h3>
                    <h2 className={styles.h2}>Обучение <br/><i>мастеров</i></h2>
                    <h4 className={styles.h4}>Мы постоянно обучаем наших мастеров в лучших школах.</h4>
                    <BlackButton content={'Узнать подробнее'}></BlackButton>
                </div>
                <div className={styles.imgBlock}></div>
            </div>
        </Wrapper>
    )
}