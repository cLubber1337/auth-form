import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { SignInForm, SignInFormType } from '@/components/sign-in-form/sign-in-form'
import { UiCard } from '@/components/ui-kit'
import { UserProfile } from '@/components/user/user-profile'
import { User, auth } from '@/services/api'

import s from '@/styles/app.module.scss'

export const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const handleSubmitSignIn: SubmitHandler<SignInFormType> = async data => {
    setIsLoading(true)
    try {
      const res = await auth(data)

      setUser(res)
    } catch (error) {
      setErrorMessage(error as string)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={s.signIn}>
      {user ? (
        <UserProfile signOut={() => setUser(null)} {...user} />
      ) : (
        <>
          <SignInForm
            errorMessage={errorMessage}
            isLoading={isLoading}
            onSubmit={handleSubmitSignIn}
          />
          <UiCard className={s.signUpCard}>
            <p>
              Don&apos;t have an account?{' '}
              <a className={s.signUpLink} href={'#'}>
                Sign up
              </a>
            </p>
          </UiCard>
        </>
      )}
      {!user && (
        <div className={s.testCredentials}>
          <p> Email: test@example.com</p>
          <p> Password: 123</p>
        </div>
      )}
    </main>
  )
}
