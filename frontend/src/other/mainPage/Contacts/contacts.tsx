import styles from "./contacts.module.css"
import { BlackButton } from "../../Button/blackButton";
import { useState } from "react";
import axios from 'axios'



export const Contacts = () => {

    const [inputValueName, setInputValueName] = useState('')
    const [inputValueTel, setInputValueTel] = useState('')
    const prevent = (e) =>{
        e.preventDefault()
        setInputValueTel('')
        setInputValueName('')
        BackendInput()
    }
    const BackendInput = async () =>{
        const body = {
            name: inputValueName,
            phone: inputValueTel,
        }
        try {
            const res = await axios.post('http://localhost:3002/api/sendEmail', body)
            console.log (res)
        }
        catch (e) {
            console.log (e)
        }
    }

    return (
        <div className={styles.contacts}>
            <div className={styles.border_content}>
                <h2>контакты</h2>
                <div className={styles.contacts_content}>
                    <form action='http://localhost:3002/api/sendEmail' method={'POST'}>
                        <input
                            type="text"
                            value={inputValueName}
                            onChange={e=> setInputValueName(e.target.value)}
                            name={'name'}
                            placeholder={'Ваше имя'}
                            required={true}/>
                        <input
                            type="tel"
                            value={inputValueTel}
                            onChange={e=> setInputValueTel(e.target.value)}
                            name={'phone'}
                            pattern="+[0-9]{3}-([0-9]{3})-([0-9]{4})"
                            maxLength={11}
                            placeholder={'Номер телефона'}
                            required={true}/>
                        <BlackButton
                            content={'Забронировать время'}
                            onClick={prevent}
                        />
                    </form>
                    <p className={styles.text}>нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</p>
                </div>
            </div>
            <div className={styles.text_img_content}>
                <h3>мы работаем <br/> чтобы осуществить <br/><i>ваши мечты <br/>о красоте <br/> и здоровье</i></h3>
                <div className={styles.imgIcon}>
                    <div className={styles.firstImg}></div>
                    <div className={styles.secondImg}></div>
                </div>
                <div className={styles.star}></div>
            </div>
        </div>
    )
}