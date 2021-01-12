import { Subject } from "rxjs"

export const authObservable = new Subject(null)
export const pendingTransactionObersvable = new Subject()

setTimeout(() => {
  setTimeout(() => {
    pendingTransactionObersvable.next({
      pId: "premium1min",
      transactionId: "mj90n08243h5gj",
      isTotallyValid: true
    })
  }, Math.random() * 1000)

  setTimeout(() => {
    authObservable.next({ id: "v902u3ajc890slx", name: "Jonny" })
  }, Math.random() * 1000)
}, 2)
