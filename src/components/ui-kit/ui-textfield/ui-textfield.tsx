import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './ui-textfield.module.scss'

interface UiTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  errorMessage?: string
  label: string
}

export const UiTextField = forwardRef(
  (
    { className = '', errorMessage, label, ...props }: UiTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(s.container, className)}>
        {label && (
          <label className={s.label} htmlFor={props.name}>
            {label}
          </label>
        )}
        <input className={clsx(s.textField, errorMessage && s.errorInput)} ref={ref} {...props} />
        {errorMessage && <span className={s.errorText}>{errorMessage}</span>}
      </div>
    )
  }
)
