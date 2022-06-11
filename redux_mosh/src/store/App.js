// import store from "./store/store";
// import * as actions from "./store/bugs"

import configureStore from "./configureStore"
import * as actions from "../store/bugs"

const store = configureStore()

store.subscribe(()=>{
  console.log("store changed")
})

store.dispatch(actions.bugAdded("bug 1"))
store.dispatch(actions.bugAdded("bug 2"))
store.dispatch(actions.bugAdded("bug 3"))
store.dispatch(actions.bugResolved(1))

console.log(store.getState())

const App = () => {
  return (
    <div>
      App     
    </div>
  )
}
export default App

// import store from "./store";
// import * as actions from "./actionsCreator"
// store.subscribe(()=>{
//   console.log("store changed")
// })
// store.dispatch(actions.bugAdded("bug 1"))
// store.dispatch(actions.bugAdded("bug 2"))
// store.dispatch(actions.bugAdded("bug 3"))
// store.dispatch(actions.bugResolved(1))
// console.log(store.getState())
// const App = () => {
//   return (
//     <div>App
     
//     </div>
//   )
// }
// export default App

// using Custom Store
// import store from "./customStore";
// import * as actions from "./actionsCreator"
// // store.state=1
// // console.log(store)

// // store.state=1
// // console.log(store.getState())
// // console.log(store)
 
// store.subscribe(()=>{
//   console.log("store changed")
// })

// store.dispatch(actions.bugAdded("bug 3"))
// console.log(store.getState())

// const App = () => {
//   return (
//     <div>App
     
//     </div>
//   )
// }
// export default App




// import React from 'react'
// import store from './store'
// import { bugAdded ,bugResolved} from './actionsCreator'

// const unsubscribe = store.subscribe(()=>{
//   console.log("store changed",store.getState())
// })
// console.log(store.getState())
// store.dispatch(bugAdded("bug 1"))
// store.dispatch(bugAdded("bug 2"))
// store.dispatch(bugAdded("bug 3"))
// store.dispatch(bugResolved(1))
// unsubscribe()
// const App = () => {
//   return (
//     <div>App
     
//     </div>
//   )
// }
// export default App


// import React from 'react'
// import store from './store'
// // import { BUG_ADDED,BUG_REMOVED } from './actionTypes'
// import * as actions from "./actionTypes"
// // console.log(store)
// const unsubscribe = store.subscribe(()=>{
//   console.log("store changed",store.getState())
// })
// console.log(store.getState())
// store.dispatch({
//   type:actions.BUG_ADDED,
//   payload:{
//     description:"new bug 1 added"
//   }
// })
// unsubscribe()
// store.dispatch({
//   type:actions.BUG_REMOVED,
//   payload:{
//     id:1
//   }
// })
// const App = () => {
//   return (
//     <div>App
     
//     </div>
//   )
// }

// export default App