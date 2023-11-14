import { useForm } from 'react-hook-form'

import { UiButton, UiCard, UiTextField } from '@/components/ui-kit'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './sign-in-form.module.scss'

type SignInFormProps = {
  isLoading: boolean
  onSubmit: (data: SignInFormType) => void
}

export type SignInFormType = {
  email: string
  password: string
}

export const SignInForm = ({ isLoading, onSubmit }: SignInFormProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignInFormType>()

  return (
    <UiCard>
      <h1 className={s.title}>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UiTextField
          errorMessage={errors.email?.message}
          required
          {...register('email')}
          label={'Email'}
          type={'email'}
        />
        <UiTextField
          required
          {...register('password')}
          errorMessage={errors.password?.message}
          label={'Password'}
          type={'password'}
        />
        <div className={s.actions}>
          <UiButton className={s.submitBtn} type={'submit'} variant={'primary'}>
            {isLoading && 'Loading...'} Sign in
          </UiButton>
          <div className={s.divider}>
            <div className={s.line}></div>
            <span className={s.or}>OR</span>
            <div className={s.line}></div>
          </div>
          <div className={s.loginWithFB}>
            <a
              className={s.linkFacebook}
              href={'https://www.facebook.com/'}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <FontAwesomeIcon className={s.fbIcon} icon={faSquareFacebook} />
              Log in with Facebook
            </a>
          </div>
          <p className={s.forgotPassword}>
            <a href={'#'}>Forgot password?</a>
          </p>
        </div>
      </form>
    </UiCard>
  )
}
