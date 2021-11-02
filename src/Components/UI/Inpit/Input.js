import React, {useState} from 'react'
import './Inpit.scss'

export const Input = (
    {
        label = '',
        type = 'text',
        name = 'input',
        required = false,
        onChange = () => true,
        errorMessage = 'Ошибка!',
        disabled = false
    }) => {
    const [passwordIsValid, setValidPassword] = useState(true)

    const handleChange = (e) => setValidPassword(onChange(e))

    return (
        <label className={`input ${passwordIsValid ? 'input_valid' : 'input_error'}`}>
            {label}:
            <input disabled={disabled} onChange={handleChange} type={type} name={name} required={required}/>
            {
                !passwordIsValid &&
                <span className={'input__error-message'}>{errorMessage}</span>
            }
        </label>
    )
}
