import { atom } from 'recoil'

export interface AuthUIState {
  view: 'login' | 'signup' | 'resetPassword'
}

const defaultState: AuthUIState = {
  view: 'login',
}

export const authUIState = atom<AuthUIState>({
  key: 'authUIState',
  default: defaultState,
})
