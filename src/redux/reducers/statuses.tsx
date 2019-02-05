import {
  FETCH_STATUSES_SUCCESS,
  FETCH_STATUSES_FAILED,
  FETCH_STATUSES_PENDING,
  ADD_STATUS_SUCCESS,
  ADD_STATUS_FAILED,
  ADD_STATUS_PENDING,
  REMOVE_STATUS_SUCCESS,
  REMOVE_STATUS_FAILED,
  REMOVE_STATUS_PENDING
} from '../actions/statuses'
import { Action } from 'redux'

interface Status {
  author_id: number
  content: string
  imageUrl: string
  created_at: string
}

let initialState: Status[] = []

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_STATUSES_SUCCESS:

    default:
      return state
  }
}
