import styles from "./advanages.module.scss"
import { Wrapper } from "@/shared/wrapper/wrapper";
import { Htag } from "@/shared/ui/Htag/Htag";

export const Advantages = () => {
    return (
        <Wrapper>
            <div className={ styles.firstBlockContent }>
                <div className={ styles.firstImgContent }>

                    <div className={ styles.imgBlock }>
                        <Htag tag={ 'h3Main' } color={ 'var(--white)' }>преимущества</Htag>
                    </div>
                </div>
                <div className={ styles.gapBlock }>
                    <div className={ styles.bgBlockAdvantages }>
                        <div className={ styles.firstLine }></div>
                        <Htag tag={ 'h3' } color={ 'var(--white)' }>Гибкий график</Htag>
                        <Htag tag={ 'text' } color={ 'var(--white)' } className={styles.Htag}>Для экономии времени гостя студия предоставляет
                            предоставляет
                            услугу “Сет в 4 руки”
                        </Htag>
                    </div>
                    <div className={ styles.bgBlockAdvantages }>
                        <Htag tag={ 'h3' } color={ 'var(--white)' }>Качество</Htag>
                        <Htag tag={ 'text' } color={ 'var(--white)' } className={styles.Htag}>Наша студия работает только с качественными
                            материалами и
                            современным оборудованием
                        </Htag>
                    </div>
                </div>
            </div>
            <div className={ styles.secondBlockContent }>

                <div className={ styles.gapBlock }>
                    <div className={ styles.bgBlockAdvantages }>
                        <Htag tag={ 'h3' } color={ 'var(--white)' }>Профессионализм</Htag>
                        <Htag tag={ 'text' } style={{width: 600, color: "var(--white)"}} className={styles.Htag}>Все мастера студии – сертифицированные
                            специалисты, имеющие большой
                            опыт работы и постоянно повышающие квалификацию
                        </Htag>
                        <div className={ styles.secondLine }></div>
                    </div>
                    <div className={ styles.bgBlockAdvantages }>
                        <Htag tag={ 'h3' } color={ 'var(--white)' }>Стерилизация</Htag>
                        <Htag tag={ 'text' } color={ 'var(--white)' } className={styles.Htag}>Мы используем одноразовые расходники и тщательно
                            следим за
                            соблюдением норм СанПиНа
                        </Htag>
                    </div>
                    <div className={ styles.bgBlockAdvantages }>
                        <Htag tag={ 'h3' } color={ 'var(--white)' }>Клиентоориентированность</Htag>
                        <Htag tag={ 'text' } color={ 'var(--white)' } className={styles.Htag}>К каждому нашему гостю мы пододим индивидуально,
                            учитывая все
                            пожелания и особенности
                        </Htag>
                        <div className={ styles.threeLine }></div>
                    </div>
                </div>
                <div>
                    <div className={ styles.secondImgContent }></div>
                </div>
            </div>
        </Wrapper>
    )
}
