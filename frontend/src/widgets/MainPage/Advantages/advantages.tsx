import styles from "./advanages.module.scss"
import { Wrapper } from "../../shared/wrapper/wrapper";

export const Advantages = () => {
    return (
        <Wrapper>
            <div className={ styles.firstBlockContent }>
                <div className={ styles.firstImgContent }>
                    <div className={ styles.textImgContent }>Преимущества</div>
                    <div className={ styles.imgBlock }></div>
                </div>
                <div className={ styles.gapBlock }>
                    <div className={ styles.bgBlockAdvantages }>
                        <div className={ styles.firstLine }></div>
                        <div className={ styles.h3 }>Гибкий график</div>
                        <div className={ styles.h4 }>Для экономии времени гостя студия предоставляет предоставляет
                            услугу “Сет в 4 руки”
                        </div>
                    </div>
                    <div className={ styles.bgBlockAdvantages }>
                        <div className={ styles.h3 }>Качество</div>
                        <div className={ styles.h4 }>Наша студия работает только с качественными материалами и
                            современным оборудованием
                        </div>
                    </div>
                </div>
            </div>
            <div className={ styles.secondBlockContent }>

                <div className={ styles.gapBlock }>
                    <div className={ styles.bgBlockAdvantages }>
                        <div className={ styles.h3 }>Профессионализм</div>
                        <div className={ styles.h4 }>Все мастера студии – сертифицированные специалисты, имеющие большой
                            опыт работы и постоянно повышающие квалификацию
                        </div>
                        <div className={styles.secondLine}></div>
                    </div>
                    <div className={ styles.bgBlockAdvantages }>
                        <div className={ styles.h3 }>Стерилизация</div>
                        <div className={ styles.h4 }>Мы используем одноразовые расходники и тщательно следим за
                            соблюдением норм СанПиНа
                        </div>
                    </div>
                    <div className={ styles.bgBlockAdvantages }>
                        <div className={ styles.h3 }>Клиентоориентированность</div>
                        <div className={ styles.h4 }>К каждому нашему гостю мы пододим индивидуально, учитывая все
                            пожелания и особенности
                        </div>
                        <div className={styles.threeLine}></div>
                    </div>
                </div>
                <div>
                    <div className={ styles.secondImgContent }></div>
                </div>
            </div>
        </Wrapper>
    )
}
