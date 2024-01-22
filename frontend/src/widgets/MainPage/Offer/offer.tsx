import styles from "./offer.module.scss"
import { Button } from "@/shared/ui/button/Button";
import { Htag } from "@/shared/ui/Htag/Htag";

export const Offer = () => {

    return (
        <div className={styles.mainTitle}>
            <div className={styles.mainPage}>
                <div>
                    <Htag tag={"h1"} color={'var(--white'} className={styles.offerPosition}>Мы создаем</Htag>
                    <Htag tag={'h1Bold'}  color={'var(--white)'} className={styles.offerPositionTwo}>Ваш образ</Htag>
                </div>
                <div className={styles.mainPage_button}>
                    <Button color={"btn_bg_white"}>Забронировать время</Button>
                    <Button color={"btn_white"}>Обратный звонок</Button>
                </div>
                <div className={styles.lineMainPage}></div>
                <div className={styles.starMainPage}></div>
            </div>
            <div className={styles.photo_mainPage}></div>
        </div>
    )
}