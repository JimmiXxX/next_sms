import styles from "./aboutUs.module.scss"
import { Button } from "@/shared/ui/button/Button";
import { Htag } from "@/shared/ui/Htag/Htag";
import { Wrapper } from "@/shared/wrapper/wrapper";

export const AboutUs = () => {

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.firstBlock}>
                        <Htag tag={'h3Main'} color={'var(--gray)'}>о студии</Htag>
                        <Htag tag={'text'} color={'var(--gray)'} className={styles.aboutTag}>Мы заботимся о Вашем комфорте и хотим, чтобы посещение нашей студии приносило Вам только положительные эмоции</Htag>
                        <Button color={"btn_gray"} className={styles.btn}>Узнать о нас</Button>
                    </div>

                    <div className={styles.secondBlock}>
                        <Htag tag={'h2'} color={'var(--gray)'} className={styles.h2}>Для наших мастеров главное</Htag>
                        <Htag tag={'h2Bold'} color={'var(--gray)'} className={styles.Htag}>– это довольный гость</Htag>
                        <div className={styles.imgFlex}>
                            <div className={styles.firstImgAboutUs}></div>
                            <div className={styles.imgFlexSecondBlock}>
                                <div className={styles.secondImgAboutUs}></div>
                                <div className={styles.threeImgAboutUs}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lineAboutUs}></div>
                </div>
            </div>
        </Wrapper>
    )
}