import styles from "./training.module.scss"
import { Wrapper } from "@/shared/wrapper/wrapper";
import { Button } from "@/shared/ui/button/Button";
import { Htag } from "@/shared/ui/Htag/Htag";

export const Training = () => {

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.firstBlockContent}>
                    <Htag tag={'h3Main'} color={'var(--gray)'}>обучение</Htag>
                    <Htag tag={'h2'} color={'var(--gray)'} className={styles.Htag}>Обучение <br/>
                        <Htag tag={'h2Bold'} color={'var(--gray)'}>мастеров</Htag>
                    </Htag>
                    <Htag tag={'text'} color={'var(--gray)'} className={styles.HtagText}>Мы постоянно обучаем наших мастеров в лучших школах.</Htag>
                    <Button color={'btn_gray'} className={styles.btn}>Узнать подробнее</Button>
                </div>
                <div className={styles.imgBlock}></div>
            </div>
        </Wrapper>
    )
}