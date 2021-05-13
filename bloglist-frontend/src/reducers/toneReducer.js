
const toneReducer = (state = 'pos', action) => {
  console.log('the tone state is:')
  console.log(state)
  switch(action.type) {
  case 'POS_TONE':
    return 'pos'
  case 'NEG_TONE':
    return 'neg'
  default:
    return state
  }
}

export const changeToneToPos = () => {
  return async dispatch => {
    dispatch({
      type: 'POS_TONE'
    })
  }
}

export const changeToneToNeg = () => {
  return async dispatch => {
    dispatch({
      type: 'NEG_TONE'
    })
  }
}

export default toneReducer