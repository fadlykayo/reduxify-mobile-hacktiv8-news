const SearchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_KEY':
      return action.payload
    default:
      return state
  }
}

export default SearchReducer
