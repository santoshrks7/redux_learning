import { createSlice } from "@reduxjs/toolkit";

let lastId = 0

const slice1 = createSlice({
    name:"projects",
    initialState:[],
    reducers:{
        //action =>action handler
        projectAdded:(projects,action)=>{
            projects.push(
                {
                    id:++lastId,
                    name:action.payload.name

                }
            )
        }
    }
})

export const {projectAdded} = slice1.actions
export default slice1.reducer
