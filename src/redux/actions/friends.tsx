import { Dispatch } from 'redux'
import axios from 'axios'

export const FETCH_FRIENDS_PENDING = 'FETCH_FRIENDS_PENDING'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
export const FETCH_FRIENDS_FAILED = 'FETCH_FRIENDS_FAILED'

// FR = Friend Request
export const FR_SENT_PENDING = 'FR_SENT_PENDING'
export const FR_SENT_SUCCESS = 'FR_SENT_SUCCESS'
export const FR_SENT_FAILED = 'FR_SENT_FAILED'

// FR = Friend Request
export const FR_RESPONSE_PENDING = 'FR_RESPONSE_PENDING'
export const FR_RESPONSE_SUCCESS = 'FR_RESPONSE_SUCCESS'
export const FR_RESPONSE_FAILED = 'FR_RESPONSE_FAILED'

export const REMOVE_FRIEND_PENDING = 'REMOVE_FRIEND_PENDING'
export const REMOVE_FRIEND_SUCCESS = 'REMOVE_FRIEND_SUCCESS'
export const REMOVE_FRIEND_FAILED = 'REMOVE_FRIEND_FAILED'

export const fetchFriends = (userId: number) => (dispatch: Dispatch) => {
  dispatch({ type: FETCH_FRIENDS_PENDING })
  axios
    .get(`http://localhost:8000/api/users/${userId}/friends`)
    .then(res =>
      dispatch({
        type: FETCH_FRIENDS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_FRIENDS_FAILED
      })
    )
}

export const friendReqSent = (fromId: number, toId: number) => (
  dispatch: Dispatch
) => {
  dispatch({ type: FR_SENT_PENDING })
  axios
    .post(`http://localhost:8000/api/friend-request/${fromId}/${toId}`)
    .then(res =>
      dispatch({
        type: FR_SENT_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FR_SENT_FAILED
      })
    )
}

export const removeStatus = (statusId: number) => (dispatch: Dispatch) => {
  dispatch({ type: FR_RESPONSE_PENDING })
  axios
    .delete(`http://localhost:8000/api/statuses/${statusId}`)
    .then(res =>
      dispatch({
        type: FR_RESPONSE_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FR_RESPONSE_FAILED
      })
    )
}
