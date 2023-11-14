import { UiButton } from '@/components/ui-kit/ui-button/ui-button'
import { UiTextField } from '@/components/ui-kit/ui-textarea/ui-textfield'

export const App = () => {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}
    >
      <UiTextField label={'Email'} />
      <UiButton variant={'secondary'}>Login</UiButton>
    </div>
  )
}
