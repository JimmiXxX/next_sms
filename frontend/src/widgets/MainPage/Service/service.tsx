import styles from "./service.module.scss"
import { Wrapper } from "../../shared/wrapper/wrapper";
import Link from "next/link";
import { Button } from "../../shared/ui/button/Button";

export const Service = () => {

    return (
        <Wrapper>
            <div id={'service'} className={styles.service}>&nbsp;</div>
            <div className={styles.content} >
                <div className={styles.bgLine}></div>
                <div className={styles.title}>
                    <h2 className={styles.headerTitle}>Популярные услуги</h2>
                    <div className={styles.allLink}>
                        <Link href="/frontend/src/pages/service" className={styles.link}>Маникюр "Все включено"</Link>
                        <Link href="/frontend/src/pages/service" className={styles.link}>Перманентный макияж бровей</Link>
                        <Link href="/frontend/src/pages/service" className={styles.link}>Образ “Под ключ”</Link>
                        <Link href="/frontend/src/pages/service" className={styles.link}>Сет 4-6 рук за 2 часа</Link>
                        <Link href="/frontend/src/pages/service" className={styles.link}>Экспресс-макияж (Nude)</Link>
                        <Link href="/frontend/src/pages/service" className={styles.link}>Обработка онихолизиса</Link>
                    </div>
                </div>
                <div className={styles.subtitle}>
                    <h2 className={styles.headerOffer}>Место <br/>для свиданий с самыми<i>креативными мастерами</i></h2>
                    <Button color={"btn_bg_gray"}>Записаться онлайн</Button>
                </div>
            </div>
        </Wrapper>
    )
}
