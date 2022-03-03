import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = [{id: nanoid(), name: "X", description: "Russia Invades Ukraine"}];

export const variableSlice = createSlice({
    name: 'variables',
    initialState: initialState,
    reducers: {
        create: (state) => {
            state.push({
                id: nanoid(),
                name: "",
                description: "",
            });
        },
        remove: (state, action) => {
            const variable = state.find(variable => variable.id === action.payload.id);
            state = state.splice(state.indexOf(variable), 1)
        },
        update: (state, action) => {
            const variable = state.find(variable => variable.id === action.payload.id);
            if (variable) {
                variable.name = action.payload.name;
                variable.description = action.payload.description;
            }
        }
    }
})

export const { create, remove, update } = variableSlice.actions

export default variableSlice.reducer;
