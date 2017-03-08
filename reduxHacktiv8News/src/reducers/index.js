import { combineReducers } from 'redux'
import NewsReducer from './reducer_news.js'
import SearchReducer from './reducer_search.js'
import PeoplesReducer from './reducer_peoples.js'

const rootReducers = combineReducers({
  news: NewsReducer,
  searchKey: SearchReducer,
  peoples: PeoplesReducer
})

export default rootReducers
