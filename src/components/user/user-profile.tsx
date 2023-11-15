import type { User } from '@/services/api'

import { UiButton } from '@/components/ui-kit'

import s from './user-profile.module.scss'

type UserProfileProps = {
  signOut: () => void
} & User
export const UserProfile = ({ signOut, ...props }: UserProfileProps) => {
  return (
    <div className={s.user}>
      <img alt={props.name} className={s.img} src={props.photo} />
      <p className={s.name}>{props.name}</p>
      <p className={s.email}>{props.email}</p>
      <UiButton onClick={signOut} variant={'secondary'}>
        Sign out
      </UiButton>
    </div>
  )
}
