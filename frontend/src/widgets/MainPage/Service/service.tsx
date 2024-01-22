import styles from "./service.module.scss"
import Link from "next/link";
import { Wrapper } from "@/shared/wrapper/wrapper";
import { Button } from "@/shared/ui/button/Button";
import { Htag } from "@/shared/ui/Htag/Htag";

export const Service = () => {

    return (
        <Wrapper>
            <div id={ 'service' } className={ styles.service }>&nbsp;</div>
            <div className={ styles.content }>
                <div className={ styles.bgLine }></div>
                <div className={ styles.title }>
                    <Htag tag={ 'h3Main' } color={ 'var(--gray)' }>популярные услуги</Htag>
                    <div className={ styles.allLink }>
                        <Link href="/frontend/src/pages/service" className={ styles.link }>Маникюр "Все включено"</Link>
                        <Link href="/frontend/src/pages/service" className={ styles.link }>Перманентный макияж
                            бровей</Link>
                        <Link href="/frontend/src/pages/service" className={ styles.link }>Образ “Под ключ”</Link>
                        <Link href="/frontend/src/pages/service" className={ styles.link }>Сет 4-6 рук за 2 часа</Link>
                        <Link href="/frontend/src/pages/service" className={ styles.link }>Экспресс-макияж (Nude)</Link>
                        <Link href="/frontend/src/pages/service" className={ styles.link }>Обработка онихолизиса</Link>
                    </div>
                </div>
                <div className={ styles.subtitle }>
                    <Htag tag={ 'h2' } color={ 'var(--gray)' } className={styles.Htag}>Место <br/>для свиданий с самыми
                        <Htag tag={ 'h2Bold' }> креативными мастерами</Htag>
                    </Htag>
                    <Button color={ "btn_gray" } className={styles.btn}>Записаться онлайн</Button>
                </div>
            </div>
        </Wrapper>
    )
}
