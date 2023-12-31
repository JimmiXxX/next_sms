import styles from "./ui/offer.module.css"
import { GrayBtn } from "../../Button/grayBtn";
import { WhiteButton } from "../../Button/whiteButton";

export const Offer = () => {

    return (
        <div className={styles.mainTitle}>
            <div className={styles.mainPage}>
                <div>
                    <h1 className={styles.firstH1}>Мы создаем</h1>
                    <h1 className={styles.secondH1}>Ваш образ</h1>
                </div>
                <div className={styles.mainPage_button}>
                    <GrayBtn content={'Забронировать время'}/>
                    <WhiteButton content={'Обратный звонок'}/>
                </div>
                <div className={styles.lineMainPage}></div>
                <div className={styles.starMainPage}></div>
            </div>
            <div className={styles.photo_mainPage}></div>
        </div>
    )
}