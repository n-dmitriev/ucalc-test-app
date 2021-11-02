import './Button.scss'
import React from 'react'

export const Button = ({label = 'Кнопка', type = 'button', disabled = false, onClick = () => null}) =>
    <button className={'button'} disabled={disabled} type={type} onClick={onClick}>
        {label}
    </button>
