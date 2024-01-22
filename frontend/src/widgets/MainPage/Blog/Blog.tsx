import styles from "./blog.module.scss"
import Link from "next/link";
import { Button } from "@/shared/ui/button/Button";
import { Htag } from "@/shared/ui/Htag/Htag";

export const Blog = () => {

    const optionsDate = {
        year: 'numeric' ,
        month: 'long' ,
        day: 'numeric' ,
    }
    // @ts-ignore
    const date = new Date ().toLocaleDateString ('ru' , optionsDate)

    return (
        <div className={ styles.blog_content }>
            <div className={ styles.blog }>
                <div className={ styles.blogInfo }>
                    <Htag tag={'h3Main'} color={'var(--white)'}>блог</Htag>
                    <div className={ styles.blog_text }>
                        <div className={ styles.text_content }>
                            <Link href={'/blog'} className={styles.ImgText}>
                                <div className={styles.blog_firstImg}></div>
                                <Htag tag={'text'} color={'var(--white)'}>Как выбрать дизайн?</Htag>
                            </Link>
                            <Htag tag={'text'} color={'var(--white)'} className={styles.date}>{ date }</Htag>
                        </div>
                        <div className={ styles.text_content }>
                            <Link href={'/blog'} className={styles.ImgText}>
                                <div className={styles.blog_secondImg}></div>
                                <Htag tag={'text'} color={'var(--white)'}>Топ-мастер, мастер или ...?</Htag>
                            </Link>
                            <Htag tag={'text'} color={'var(--white)'} className={styles.date}>{ date }</Htag>
                        </div>
                        <div className={ styles.text_content }>
                            <Link href={'/blog'} className={styles.ImgText}>
                                <div className={styles.blog_threeImg}></div>
                                <Htag tag={'text'} color={'var(--white)'}>Как мы стерилизуем инструменты?</Htag>
                            </Link>
                            <Htag tag={'text'} color={'var(--white)'} className={styles.date}>{ date }</Htag>
                        </div>
                    </div>
                </div>
                <Button color={"gray"} className={styles.btn}>Читать блог</Button>
            </div>
            <div className={styles.blogLine}></div>
        </div>
    )
}