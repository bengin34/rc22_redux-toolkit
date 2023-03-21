import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    user: "",

}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, action) => {
                state.user = action.payload
        },
        
        clearUser: () => {}
    }
})

export const {setUser , clearUser } = authSlice.actions
export default authSlice.reducer