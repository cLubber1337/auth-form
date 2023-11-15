import { useForm } from 'react-hook-form'

import { UiButton, UiCard, UiTextField } from '@/components/ui-kit'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './sign-in-form.module.scss'

export type SignInFormType = {
  email: string
  password: string
}

type SignInFormProps = {
  errorMessage?: string
  isLoading: boolean
  onSubmit: (data: SignInFormType) => void
}

export const SignInForm = ({ errorMessage, isLoading, onSubmit }: SignInFormProps) => {
  const { handleSubmit, register } = useForm<SignInFormType>()

  return (
    <UiCard>
      <h1 className={s.title}>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UiTextField
          disabled={isLoading}
          errorMessage={errorMessage}
          required
          {...register('email')}
          label={'Email'}
          type={'email'}
        />
        <UiTextField
          disabled={isLoading}
          required
          {...register('password')}
          errorMessage={errorMessage}
          label={'Password'}
          type={'password'}
        />
        <div className={s.actions}>
          <UiButton
            className={s.submitBtn}
            disabled={isLoading}
            type={'submit'}
            variant={'primary'}
          >
            {isLoading && <FontAwesomeIcon className={'spinner'} icon={faSpinner} />} Sign in
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
