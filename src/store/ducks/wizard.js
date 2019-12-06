export const Types = {
  SET_STEP: 'wizard/SET_STEP'
}

// Reducer

const initialState = {
  step: 1
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case Types.SET_STEP:
      return {
        step: action.payload.step
      }
    default:
      return state
  }
}

// Action Creators

export function setStep (step) {
  return {
    type: Types.SET_STEP,
    payload: {
      step
    }
  }
}
