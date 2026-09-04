export type AuthView = 'login' | 'signup' | 'lost' | 'reset' | 'profile'

export type PasswordResetCredentials = {
  key: string
  login: string
}

export type AuthUIContextType = {
  isOpen: boolean
  view: AuthView
  open: (view?: AuthView) => void
  close: () => void
  setView: (view: AuthView) => void
  /** Captured from email link, then cleared from the URL. */
  resetCredentials: PasswordResetCredentials | null
  clearResetCredentials: () => void
}
