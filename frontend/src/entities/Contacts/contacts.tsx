import styles from "../../shared/ui/MainPage/contacts/contacts.module.scss"
import { BlackButton } from "../../widgets/Button/blackButton";
import { useEffect , useState } from "react";
import axios from 'axios'
import { Validation } from "../../shared/validation/validation";


export const Contacts = () => {


    const [inputValueName , setInputValueName] = useState ('')
    const [inputValueTel , setInputValueTel] = useState ('')
    const [inputDirtyName , setInputDirtyName] = useState (false)
    const [inputDirtyTel , setInputDirtyTel] = useState (false)
    const [inputErrorName , setInputErrorName] = useState ('Имя не может быть пустым!')
    const [inputErrorTel , setInputErrorTel] = useState ('Номер телефона не может быть пустым!')
    const [validateForm , setValidateForm] = useState (false)

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
                <h2>контакты</h2>
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

                        <BlackButton
                            content={ 'Забронировать время' }
                            disabled={ !validateForm }
                            onClick={ prevent }
                        />
                    </form>
                    <p className={ styles.text }>нажимая на кнопку, Вы соглашаетесь с политикой конфиденциальности</p>
                </div>
            </div>
            <div className={ styles.text_img_content }>
                <h3>мы работаем <br/> чтобы осуществить <br/><i>ваши мечты <br/>о красоте <br/> и здоровье</i></h3>
                <div className={ styles.imgIcon }>
                    <div className={ styles.firstImg }></div>
                    <div className={ styles.secondImg }></div>
                </div>
                <div className={ styles.star }></div>
            </div>
        </div>
    )
}