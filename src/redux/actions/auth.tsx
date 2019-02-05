import { Dispatch } from 'redux'
import axios from 'axios'

export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGOUT_PENDING = 'USER_LOGOUT_PENDING'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED'

interface LoginCredentials {
  email: string
  password: string
}

export const userLogin = (credentials: LoginCredentials) => (
  dispatch: Dispatch
) => {
  axios
    .post(`http://localhost:8000/api/auth/login`, credentials)
    .then(res =>
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: USER_LOGIN_FAILED
      })
    )
}

interface SignupData {
  name: string
  email: string
  password: string
}

export const userSignup = (signupData: SignupData) => (dispatch: Dispatch) => {
  axios
    .post(`http://localhost:8000/api/auth/signup`, signupData)
    .then(res =>
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: USER_SIGNUP_FAILED
      })
    )
}

export const userLogout = (id: number) => (dispatch: Dispatch) => {
  axios
    .post(`http://localhost:8000/api/auth/logout`, id)
    .then(res =>
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: USER_LOGOUT_FAILED
      })
    )
}
