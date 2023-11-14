import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './ui-button.module.scss'

type UiButtonProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export const UiButton = ({
  children,
  className = '',
  variant = 'primary',
  ...otherProps
}: UiButtonProps) => {
  return (
    <button className={clsx(s.button, s[variant], className)} {...otherProps}>
      {children}
    </button>
  )
}
