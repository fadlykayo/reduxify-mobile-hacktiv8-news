export const setSearchKey = (searchKey) => {
  return {
    type: 'SET_SEARCH_KEY',
    payload: searchKey
  }
}

export const setPeoples = (peoples) => {
  return {
    type: 'SET_PEOPLES',
    payload: peoples
  }
}

export const setNews = (news) => {
  return {
    type: 'SET_NEWS',
    payload: news
  }
}

export const fetchNews = (searchKey) => {
  return (dispatch) => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURI(searchKey)}`)
      .then(response => {
        return response.json()
      })
      .then(resp => {
        return dispatch(setNews(resp.hits))
      })
      .catch(err => {})
  }
}

export const fetchPeoples = () => {
  return (dispatch) => {
    fetch('https://swapi.co/api/people')
      .then((response) => {
        return response.json()
      })
      .then((resp) => {
        return dispatch(setPeoples(resp.results))
      })
      .catch(err => {})
  }
}
