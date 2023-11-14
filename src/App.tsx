import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { SignInForm, SignInFormType } from '@/components/sign-in-form/sign-in-form'
import { UiCard } from '@/components/ui-kit'
import { User, auth } from '@/services/api'

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
    <main className={'sign-in'}>
      {user ? (
        <p>{user.name}</p>
      ) : (
        <>
          <SignInForm
            errorMessage={errorMessage}
            isLoading={isLoading}
            onSubmit={handleSubmitSignIn}
          />
          <UiCard className={'sign-up-card'}>
            <p style={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <a href={'#'} style={{ color: '#7e22ce', fontWeight: '500' }}>
                Sign up
              </a>
            </p>
          </UiCard>
        </>
      )}
    </main>
  )
}
