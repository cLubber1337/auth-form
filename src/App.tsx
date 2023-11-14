import { UiButton } from '@/components/ui-kit/ui-button/ui-button'

export const App = () => {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center' }}
    >
      <UiButton variant={'secondary'}>Login</UiButton>
    </div>
  )
}
