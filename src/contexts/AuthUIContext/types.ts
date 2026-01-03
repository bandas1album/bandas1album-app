export type AuthView = 'login' | 'signup' | 'lost' | 'reset' | 'profile'

export type AuthUIContextType = {
  isOpen: boolean
  view: AuthView
  open: (view?: AuthView) => void
  close: () => void
  setView: (view: AuthView) => void
}
