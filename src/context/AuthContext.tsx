import { createContext, useContext, useReducer } from 'react'
import {
  AuthAction,
  AuthDispatch,
  AuthState,
  ProviderProps,
} from '../types/auth'

const authUserState: AuthState = {
  isLogged: false,
  email: '',
  password: '',
}
export const AuthContext = createContext<{
  state: AuthState
  dispatch: AuthDispatch['dispatch']
}>({ state: authUserState, dispatch: (action: AuthAction) => {} })

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'login': {
      return {
        ...state,
        isLogged: true,
        email: action.payload.email,
        password: action.payload.password,
      }
    }
    case 'logout': {
      return {
        isLogged: false,
        email: '',
        password: '',
      }
    }
    default: {
      return state
    }
  }
}

export const AuthProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, authUserState)
  const value = { state, dispatch }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context!
}
