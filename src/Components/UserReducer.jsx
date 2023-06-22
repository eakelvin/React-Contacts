import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const users = []

const userSlice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        addUser: (state, action) => {
            const newUser = {...action.payload, id:uuidv4()}
            state.push(newUser)
        },
        editUser: (state, action) => {
            const {id, updatedUser} = action.payload
            const updatedState = state.map((contact) => {
                if (contact.id === id) {
                  return {...contact, ...updatedUser};
                }
                return contact;
              });
            return updatedState
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload.id);
        }
    }
})

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer


