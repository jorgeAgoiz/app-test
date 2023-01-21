import { ReactNode } from 'react'

interface AuthState {
  isLogged?: boolean
  email?: string
  password?: string
}

export interface AuthDispatch {
  dispatch: (action: AuthAction) => void
}

interface AuthAction {
  type: 'login' | 'logout'
  payload: AuthState
}

interface ProviderProps {
  children: ReactNode
}
