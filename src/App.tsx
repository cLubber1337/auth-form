import { UiButton } from '@/components/ui-kit/ui-button/ui-button'
import { UiCard } from '@/components/ui-kit/ui-card/ui-card'
import { UiTextField } from '@/components/ui-kit/ui-textarea/ui-textfield'

export const App = () => {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}
    >
      <UiCard>
        <h1>Sign in</h1>
        <form>
          <UiTextField label={'Email'} name={'email'} />
          <UiTextField label={'Password'} name={'password'} type={'password'} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <UiButton variant={'secondary'}>Cancel</UiButton>
            <UiButton type={'submit'} variant={'primary'}>
              Login
            </UiButton>
          </div>
        </form>
      </UiCard>
    </div>
  )
}
