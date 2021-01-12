import React, { useEffect, useState } from "react"
import "./styles.css"
import {
  authObservable,
  pendingTransactionObersvable
} from "./exampleObservables"
import { useSelector } from "react-redux"
import { setPremium, setUser, store } from "./state"

export default function App() {
  const user = useSelector((state) => state.user)

  useEffect(() => {
    const unsubs = []

    authObservable.subscribe((u) => {
      console.log(u)
      store.dispatch(setUser(u))
    })

    pendingTransactionObersvable.subscribe(() => {
      store.dispatch(setPremium(true))
    })

    return () => {
      unsubs.forEach((u) => {
        u.unsubscribe()
      })
    }
  }, [])

  // console.log(user)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {user && (
        <>
          <div>{user.name}</div>
          <div>Premium: {user.hasPremium ? "Yes" : "No"}</div>
        </>
      )}
    </div>
  )
}
