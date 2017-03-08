const PeoplesReducer = (state = [] , action) => {
  switch (action.type) {
    case 'SET_PEOPLES':
      return action.payload
    default:
      return state
  }
}

export default PeoplesReducer
