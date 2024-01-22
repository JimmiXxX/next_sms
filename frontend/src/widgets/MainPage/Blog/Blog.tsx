import styles from "./blog.module.scss"
import Link from "next/link";
import { Button } from "../../../shared/ui/button/Button";

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
                    <h2>блог</h2>
                    <div className={ styles.blog_text }>
                        <div className={ styles.text_content }>
                            <Link href={'/blog'}>
                                <div className={styles.blog_firstImg}></div>
                                <div>Как выбрать дизайн?</div>
                            </Link>
                            <div>{ date }</div>
                        </div>
                        <div className={ styles.text_content }>
                            <Link href={'/blog'}>
                                <div className={styles.blog_secondImg}></div>
                                <div>Топ-мастер, мастер или ...?</div>
                            </Link>
                            <div>{ date }</div>
                        </div>
                        <div className={ styles.text_content }>
                            <Link href={'/blog'}>
                                <div className={styles.blog_threeImg}></div>
                                <div>Как мы стерилизуем инструменты?</div>
                            </Link>
                            <div>{ date }</div>
                        </div>
                    </div>
                </div>
                <Button color={"gray"}>Читать блог</Button>
            </div>
            <div className={styles.blogLine}></div>
        </div>
    )
}