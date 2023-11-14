import { SubmitHandler } from 'react-hook-form'

import { SignInForm, SignInFormType } from '@/components/sign-in-form/sign-in-form'
import { UiCard } from '@/components/ui-kit'

export const App = () => {
  const handleSubmitSignIn: SubmitHandler<SignInFormType> = data => {
    console.log(data)
  }

  return (
    <main className={'sign-in'}>
      <SignInForm isLoading={false} onSubmit={handleSubmitSignIn} />
      <UiCard className={'sign-up-card'}>
        <p style={{ textAlign: 'center' }}>
          Don&apos;t have an account?{' '}
          <a href={'#'} style={{ color: '#7e22ce', fontWeight: '500' }}>
            Sign up
          </a>
        </p>
      </UiCard>
    </main>
  )
}
