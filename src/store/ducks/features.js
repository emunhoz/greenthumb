export const Types = {
  SET_FEATURE: 'features/SET_FEATURE'
}

// Reducer

const initialState = {
  sun: '',
  water: '',
  pets: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.SET_FEATURE:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    default:
      return state
  }
}

// Action Creators

export function setFeature ({ field, value }) {
  return {
    type: Types.SET_FEATURE,
    payload: {
      field,
      value
    }
  }
}
