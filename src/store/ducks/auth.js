export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT'
}

// Reducer

const initialState = {
  isLogged: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state.auth,
        isLogged: true
      }
    case Types.LOGOUT:
      return {
        ...state.auth,
        isLogged: false
      }
    default:
      return state
  }
}

// Action Creators

export function login () {
  return {
    type: Types.LOGIN
  }
}

export function logout () {
  return {
    type: Types.LOGOUT
  }
}
