import styles from "./contacts.module.scss"
import { useEffect , useState } from "react";
import axios from 'axios'
import { Validation } from "@/shared/validation/validation";
import { Button } from "@/shared/ui/button/Button";
import { Htag } from "@/shared/ui/Htag/Htag";


export const Contacts = () => {


    const [inputValueName , setInputValueName] = useState<string> ('')
    const [inputValueTel , setInputValueTel] = useState<string> ('')
    const [inputDirtyName , setInputDirtyName] = useState<boolean> (false)
    const [inputDirtyTel , setInputDirtyTel] = useState<boolean> (false)
    const [inputErrorName , setInputErrorName] = useState<string> ('Имя не может быть пустым!')
    const [inputErrorTel , setInputErrorTel] = useState<string> ('Номер телефона не может быть пустым!')
    const [validateForm , setValidateForm] = useState<boolean> (false)

    useEffect (() => {
        (inputErrorTel || inputErrorName) ? setValidateForm (false) : setValidateForm (true)
    } , [inputErrorTel , inputErrorName])


    const prevent = ( e ) => {
        e.preventDefault ()
        setInputValueTel ('')
        setInputValueName ('')
        BackendInput ()

    }

    const nameHandler = ( e ) => {
        setInputValueName (e.target.value)
        if (!e.target.value)
            setInputErrorName ('Имя не может быть пустым!')
        else
            setInputErrorName ('')
    }

    const phoneHandler = ( e ) => {
        setInputValueTel (e.target.value)
        const tel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

            if (!tel.test (String (e.target.value).toLowerCase ())) {
            setInputErrorTel ('Некорректный номер телефона!')
        } else {
            setInputErrorTel ('')
        }
    }

    const blurHandler = ( e ) => {
        switch (e.target.name) {
            case 'name':
                setInputDirtyName (true)
                break
            case 'phone':
                setInputDirtyTel (true)
                break
        }
    }
    const BackendInput = async () => {
        const body = {
            name: inputValueName ,
            phone: inputValueTel ,
        }
        try {
            const res = await axios.post ('http://localhost:3002/api/sendEmail' , body)
            console.log (res)
        } catch (e) {
            console.log (e)
        }
    }

    return (

        <div className={ styles.contacts }>
            <div className={ styles.border_content }>
                <Htag tag={'h3Main'} color={'var(--gray)'}>контакты</Htag>
                <div className={ styles.contacts_content }>
                    <form action='http://localhost:3002/api/sendEmail' method={ 'POST' }>
                        { (inputDirtyName && inputErrorName) && <Validation>{ inputErrorName }</Validation> }
                        <input
                            type="text"
                            value={ inputValueName }
                            onChange={ e => nameHandler (e) }
                            name={ 'name' }
                            placeholder={ 'Ваше имя' }
                            onBlur={ e => blurHandler (e) }
                        />
                        { (inputDirtyTel && inputErrorTel) && <Validation>{ inputErrorTel }</Validation> }
                        <input
                            type="tel"
                            value={ inputValueTel }
                            onChange={ e => phoneHandler (e) }
                            name={ 'phone' }
                            placeholder={ 'Номер телефона' }
                            onBlur={ e => blurHandler (e) }
                        />

                        <Button
                            color={'btn_bg_gray'}
                            disabled={ !validateForm }
                            onClick={ prevent }
                        >Забронировать время</Button>
                    </form>
                    <Htag tag={'text'} color={'var(--gray)'} className={styles.Htag}>нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</Htag>
                </div>
            </div>
            <div className={ styles.text_img_content }>
                <Htag tag={'h2'} color={'var(--gray)'}>мы работаем <br/> чтобы осуществить <br/><Htag tag={'h2Bold'}>ваши мечты <br/>о красоте <br/> и здоровье</Htag></Htag>
                <div className={ styles.imgIcon }>
                    <div className={ styles.firstImg }></div>
                    <div className={ styles.secondImg }></div>
                </div>
                <div className={ styles.star }></div>
            </div>
        </div>
    )
}