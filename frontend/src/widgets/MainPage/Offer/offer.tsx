import styles from "./offer.module.scss"
import { Button } from "../../../shared/ui/button/Button";

export const Offer = () => {

    return (
        <div className={styles.mainTitle}>
            <div className={styles.mainPage}>
                <div>
                    <h1 className={styles.firstH1}>Мы создаем</h1>
                    <h1 className={styles.secondH1}>Ваш образ</h1>
                </div>
                <div className={styles.mainPage_button}>
                    <Button color={"btn_gray"}>Забронировать время</Button>
                    <Button color={"btn_white"}>Обратный звонок</Button>
                </div>
                <div className={styles.lineMainPage}></div>
                <div className={styles.starMainPage}></div>
            </div>
            <div className={styles.photo_mainPage}></div>
        </div>
    )
}