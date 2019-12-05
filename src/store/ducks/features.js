export const Types = {
  SET_SUN: 'features/SET_SUN',
  SET_WATER: 'features/SET_WATER',
  SET_PETS: 'features/SET_PETS'
}

// Reducer

const initialState = {
  sun: '',
  water: '',
  pets: false
}

// console.log(initialState, 'initialState')

export default function reducer (state = initialState, action) {
  console.log(state, 'statestatestatestate')
  switch (action.type) {
    case Types.SET_SUN:
      return {
        ...state,
        sun: action.payload.val
      }
    case Types.SET_WATER:
      return {
        ...state,
        water: action.payload.val
      }
    case Types.SET_PETS:
      console.log(action.payload.val)
      return {
        ...state,
        pets: action.payload.val
      }
    default:
      return state
  }
}

// Action Creators

export function setSun (val) {
  return {
    type: Types.SET_SUN,
    payload: {
      val
    }
  }
}

export function setWater (val) {
  return {
    type: Types.SET_WATER,
    payload: {
      val
    }
  }
}

export function setPets (val) {
  console.log(val, 'val')
  return {
    type: Types.SET_PETS,
    payload: {
      val
    }
  }
}
