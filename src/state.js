import { combineReducers, createStore } from "redux"

export const setUser = (user) => ({
  type: "user/userSet",
  payload: user
})

export const setPremium = (hasPremium) => ({
  type: "user/premiumSet",
  payload: hasPremium
})

const user = function userReducer(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case "user/userSet":
      return payload
    case "user/premiumSet":
      return {
        ...state,
        hasPremium: payload
      }
    default:
      return state
  }
}

const reducer = combineReducers({ user })

export const store = createStore(reducer)
