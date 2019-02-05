import auth from './auth'
import conversations from './conversations'
import statuses from './statuses'
import friends from './friends'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  auth,
  conversations,
  friends,
  statuses
})
export default rootReducer
