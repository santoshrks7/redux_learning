import {createSlice } from "@reduxjs/toolkit"

let lastId = 0;
//createSlice merge createAction & createReducer in one
const slice = createSlice({
    name:"bugs",
    initialState:[],
    reducers:{
        //actions => action handler
        bugAdded:(bugs,action)=>{
            bugs.push(
                {
                    id:++lastId,
                    description:action.payload.description,
                    resolved:false
                }
            )
        },
        bugResolved:(bugs,action)=>{
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true
        }
    }
})
export const {bugAdded,bugResolved} = slice.actions
export default slice.reducer

console.log(slice)

// =============================================================
// import {createAction ,createReducer } from "@reduxjs/toolkit"

// //Action creators
// export const bugAdded = createAction("bugAdded")
// export const bugRemoved = createAction("bugRemoved")
// export const bugResolved = createAction("bugResolved")
// // console.log(bugAdded(1))
// // console.log(bugAdded.type)

// //Action Reducers 
// let lastId = 0;
// export default createReducer([],{
//     //key:value
//     //actions: functions(event => event handler)
// //like a immer
//     [bugAdded.type]:(bugs,action)=>{      
//         bugs.push(
//             {
//                 id:++lastId,
//                 description:action.payload.description,
//                 resolved:false
//             }
//         )
//     },
//     // bugRemoved:(state,action)=>{
        
//     // },
//     [bugResolved.type]:(bugs,action)=>{
//         const index = bugs.findIndex(bug => bug.id === action.payload.id)
//         bugs[index].resolved = true
//     }

// })
// // console.log(createReducer())




// =============================================================
// import {createAction} from "@reduxjs/toolkit"

// //Action Types
// const BUG_ADDED = "bugAdded"
// const BUG_REMOVED = "bugRemoved"
// const BUG_RESOLVED = "bugResolved"

// //Action creators
// export const bugAdded = description => ({
//     type:BUG_ADDED,
//             payload:{
//                 description
//             }
// })

// export const bugResolved = id =>({
//     type:BUG_RESOLVED,
//     payload:{
//         id
//     }  
// })

// //Action Reducers 
// let lastId = 0;
// function reducer(state=[],action){
//     switch(action.type){
//         case BUG_ADDED:
//             return [
//                 ...state,
//                 {
//                     id:++lastId,
//                     description:action.payload.description,
//                     resolved:false
//                 }
//             ]
//         case BUG_REMOVED:
//             return state.filter(bug=>bug.id !== action.payload.id)
//         case BUG_RESOLVED:
//             return state.map(bug=>
//                 bug.id !== action.payload.id ? bug : {...bug,resolved:true})
//         default:
//             return state  
       
//     }
// }
// export default reducer



//action creator by rtk
// const action = createAction("testaction")
// console.log(action(1))
// console.log(action({id:1}))
 
