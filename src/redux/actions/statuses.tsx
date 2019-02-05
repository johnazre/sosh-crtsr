import { Dispatch } from 'redux'
import axios from 'axios'

export const FETCH_STATUSES_PENDING = 'FETCH_STATUSES_PENDING'
export const FETCH_STATUSES_SUCCESS = 'FETCH_STATUSES_SUCCESS'
export const FETCH_STATUSES_FAILED = 'FETCH_STATUSES_FAILED'

export const ADD_STATUS_PENDING = 'ADD_STATUS_PENDING'
export const ADD_STATUS_SUCCESS = 'ADD_STATUS_SUCCESS'
export const ADD_STATUS_FAILED = 'ADD_STATUS_FAILED'

export const REMOVE_STATUS_PENDING = 'REMOVE_STATUS_PENDING'
export const REMOVE_STATUS_SUCCESS = 'REMOVE_STATUS_SUCCESS'
export const REMOVE_STATUS_FAILED = 'REMOVE_STATUS_FAILED'

export const fetchStatuses = (userId: number) => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_STATUSES_PENDING })
  axios
    .get(`http://localhost:8000/api/statuses/${userId}/friends`)
    .then(res =>
      dispatch({
        type: FETCH_STATUSES_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_STATUSES_FAILED
      })
    )
}

interface NewStatus {
  author_id: number
  content: string
}

export const addStatus = (newStatus: NewStatus) => (dispatch: Dispatch) => {
  dispatch({ type: ADD_STATUS_PENDING })
  axios
    .post(`http://localhost:8000/api/statuses`, newStatus)
    .then(res =>
      dispatch({
        type: ADD_STATUS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_STATUS_FAILED
      })
    )
}

export const removeStatus = (statusId: number) => (dispatch: Dispatch) => {
  dispatch({ type: REMOVE_STATUS_PENDING })
  axios
    .delete(`http://localhost:8000/api/statuses/${statusId}`)
    .then(res =>
      dispatch({
        type: REMOVE_STATUS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: REMOVE_STATUS_FAILED
      })
    )
}
