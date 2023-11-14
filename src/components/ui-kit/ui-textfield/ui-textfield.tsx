import { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from 'react'

import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clsx } from 'clsx'

import s from './ui-textfield.module.scss'

interface UiTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  errorMessage?: string
  label: string
  type: 'email' | 'password' | 'text'
}

export const UiTextField = forwardRef(
  (
    { className = '', errorMessage, label, type, ...props }: UiTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    function handleShowPassword() {
      setShowPassword(prevState => !prevState)
    }

    return (
      <div className={clsx(s.container, className)}>
        {label && <p className={s.label}>{label}</p>}
        {type !== 'password' ? (
          <input
            className={clsx(s.textField, errorMessage && s.errorInput)}
            ref={ref}
            type={type}
            {...props}
          />
        ) : (
          <>
            <input
              className={clsx(s.textField, errorMessage && s.errorInput)}
              ref={ref}
              type={showPassword ? 'text' : 'password'}
              {...props}
            />
            <FontAwesomeIcon
              className={s.eyeIcon}
              icon={showPassword ? faEye : faEyeSlash}
              onClick={handleShowPassword}
            />
          </>
        )}
        {errorMessage && <span className={s.errorText}>{errorMessage}</span>}
      </div>
    )
  }
)
