import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './ui-card.module.scss'

type UiCardProps = {
  children: ReactNode
  className?: string
}

export const UiCard = ({ children, className }: UiCardProps) => {
  return <div className={clsx(s.card, className)}>{children}</div>
}
