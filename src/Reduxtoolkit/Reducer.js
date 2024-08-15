import { createSlice } from "@reduxjs/toolkit";

const CVSlice=createSlice({
    name:"CVSlice",
    initialState:{
        object:{}
    },
    reducers:{
        createheader:(state,action)=>{
            return{
                ...state,object:{...state.object, ...action.payload}
            }
            console.log(state.object ,"reducer");
        }
    }
})

export const {createheader}= CVSlice.actions

export default CVSlice.reducer