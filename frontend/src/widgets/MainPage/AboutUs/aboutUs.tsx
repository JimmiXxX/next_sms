import styles from "./aboutUs.module.scss"
import { Wrapper } from "../../shared/wrapper/wrapper";
import { Button } from "../../shared/ui/button/Button";

export const AboutUs = () => {

    return (
        <Wrapper>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.firstBlock}>
                        <h3 className={styles.h3}>О студии</h3>
                        <h4 className={styles.h4}>Мы заботимся о Вашем комфорте и хотим, чтобы посещение нашей студии приносило Вам только положительные эмоции</h4>
                        <Button color={"gray"}>Узнать о нас</Button>
                    </div>

                    <div className={styles.secondBlock}>
                        <h2 className={styles.h2}>Для наших мастеров главное</h2>
                        <h2 className={styles.h2}><i>– это <span>довольный гость</span></i></h2>
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