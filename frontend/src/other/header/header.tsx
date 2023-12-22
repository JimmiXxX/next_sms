import styles from "../header/ui/header.module.css";
import Link from "next/link";
export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/" className={styles.logo}></Link>
                <nav className={styles.navBar}>
                    <div className={styles.header_links}>
                        <Link href={'/#service'} className={styles.links}>Услуги</Link>
                        <Link href="/studio" className={styles.links}>О студии</Link>
                        <Link href={'/#review'} className={styles.links}>Отзывы</Link>
                        <Link href="/blog" className={styles.links}>Блог</Link>
                        <Link href="/contacts" className={styles.links}>Контакты</Link>
                    </div>
                    <button className={styles.header_button}>Заказать звонок</button>
                </nav>
            </header>
        </>
    )
}


