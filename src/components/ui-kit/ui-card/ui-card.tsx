import { ReactNode } from 'react'

import s from './ui-card.module.scss'

type UiCardProps = {
  children: ReactNode
}

export const UiCard = ({ children }: UiCardProps) => {
  return <div className={s.card}>{children}</div>
}
