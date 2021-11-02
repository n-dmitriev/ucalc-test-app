import React, {useState} from 'react'
import './ResetPasswordForm.scss'
import {Input} from '../UI/Inpit/Input'
import {Button} from '../UI/Button/Button'

export const ResetPasswordForm = (props) => {
    const [password, setPassword] = useState('')
    const [isValid, setValid] = useState('')

    const checkingForRegister = (str) => !!str.split('').find(char =>
        isNaN(char) && char.toUpperCase() === char)

    const onChangePassword = (e) => {
        const value = e.target.value.trim()
        let valid = value.length >= 8 && checkingForRegister(value)
        setPassword(value)
        return valid
    }

    const onChangeRepeatPassword = (e) => {
        let isValid = e.target.value === password
        setValid(isValid)
        return isValid
    }

    const onSubmit = (e) => {
        e.preventDefault()
        alert(`Ваш новый пароль: ${password}`)
    }

    return (
        <div className={'reset-password'}>
            <h1 className={'reset-password__title'}>Смена пароля</h1>

            <p className={'reset-password__description'}>
                Пароль должен содержать не менее 8 символов и одну заглавную букву.
            </p>

            <form onSubmit={onSubmit} className={'reset-password__form'}>
                <Input
                    label={'Пароль'}
                    type={'password'}
                    name={'password'}
                    errorMessage={'Пароль должен содержать не менее 8 символов и одну заглавную букву!'}
                    onChange={onChangePassword}
                    required={true}
                />

                <Input
                    label={'Повторите пароль'}
                    type={'password'}
                    name={'repeatPassword'}
                    errorMessage={'Пароли не совпадают!'}
                    onChange={onChangeRepeatPassword}
                    required={true}
                />

                <Button
                    label={'Сменить пароль'}
                    type={'submit'}
                    disabled={!isValid}
                />
            </form>
        </div>
    )
}
