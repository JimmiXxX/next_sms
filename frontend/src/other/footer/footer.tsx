import styles from "./footer.module.css"
import Link from "next/link"

export const Footer = () => {

    return (
        <footer className={ styles.footer_content }>
            <div className={ styles.content }>
                <div className={ styles.first_Block_Footer }>
                    <Link href={ '/' } className={ styles.footer_logo }></Link>
                    <Link href={ '/' } className={ styles.polici }>Политика конфиденциальности</Link>
                </div>
                <div className={ styles.menu_footer }>
                    <h4>Меню</h4>
                    <Link href={ '#service' }>Услуги</Link>
                    <Link href={ '/studio' }>О студии</Link>
                    <Link href={ '#review' }>Отзывы</Link>
                    <Link href={ '/blog' }>Блог</Link>
                    <Link href={ '/contacts' }>Контакты</Link>
                </div>
                <div className={ styles.contacts_footer }>
                    <h4>Контакты</h4>
                    <h5>Email: smstudiospb@mail.ru</h5>
                    <h5>Время работы: пн-вс 11:00–18:00</h5>
                    <h5>м. Парнас📍Толубеевский проезд д. 38 к. 3 <br/>Tel/WhatsApp: +7-900-645-81-51</h5>
                    <h5>м. Звездная📍улица Звёздная д. 11 к. 1 <br/>Tel/WhatsApp: +7-900-646-59-44</h5>
                </div>
                <div className={ styles.icon_content }>
                    <div className={ styles.whatsapp }></div>
                    <div className={ styles.viber }></div>
                    <div className={ styles.telegram }></div>
                    <div className={ styles.whatsapp }></div>
                    <div className={ styles.viber }></div>
                    <div className={ styles.telegram }></div>
                    <div className={ styles.instagram }></div>
                    <div className={ styles.vk }></div>
                </div>
            </div>
        </footer>
    )
}