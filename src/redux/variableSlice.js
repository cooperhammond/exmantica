import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{id: "INITIAL_VARIABLE_X", name: "Xray", description: "Russia Invades Ukraine in 2022"},
                      {id: "INITIAL_VARIABLE_Y", name: "Yodel", description: "Putin Is Still President in 2023"}];

export const variableSlice = createSlice({
    name: 'variables',
    initialState: initialState,
    reducers: {
        createVariable: (state) => {
            state.push({
                id: nanoid(),
                name: "",
                description: "",
            });
        },
        removeVariable: (state, action) => {
            const variable = state.find(variable => variable.id === action.payload.id);
            state = state.splice(state.indexOf(variable), 1)
        },
        updateVariable: (state, action) => {
            const variable = state.find(variable => variable.id === action.payload.id);
            if (variable) {
                variable.name = action.payload.name;
                variable.description = action.payload.description;
            }
        }
    }
});

export const { createVariable, removeVariable, updateVariable } = variableSlice.actions

export default variableSlice.reducer;
