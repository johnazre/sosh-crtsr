import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN_PENDING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_PENDING,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,
  USER_LOGOUT_PENDING
} from '../actions/auth'

let initialState = {
  user: {
    id: 1,
    name: 'Irwin Kelly',
    email: 'irwinkelly@accidency.com',
    bio:
      'Nulla adipisicing duis esse anim deserunt commodo magna. Minim cillum ut tempor aliquip mollit amet consequat deserunt nulla proident mollit proident in. Ad dolor amet occaecat irure labore aliqua velit consectetur nulla pariatur adipisicing elit amet. Duis ad do deserunt est quis duis. Minim proident pariatur aliquip magna magna ipsum do velit ullamco deserunt cillum irure anim. Aliquip labore incididunt duis aute et consectetur ea irure ad velit excepteur minim duis quis.\r\n',
    profilePhotoURL: 'http://placehold.it/32x32',
    location: 'Tucson, AZ',
    created_at: '2016-02-18T11:42:43 +07:00'
  },
  isLoggedIn: true
}

export default (state = [], action: { type: string }) => {
  switch (action.type) {
    default:
      return state
  }
}
