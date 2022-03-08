import { createSlice, nanoid } from "@reduxjs/toolkit";

const tableTypes = {
    MARGINAL_TABLE: "marginal",
    CONDITIONAL_TABLE: "conditional",
    JOINT_TABLE: "joint"
}

const initialState = [{id: nanoid(), type: tableTypes.CONDITIONAL, variable_ids: ["INITIAL_VARIABLE_X", "INITIAL_VARIABLE_Y"]}];

export const variableSlice = createSlice({
    name: 'tables',
    initialState: initialState,
    reducers: {
        createTable: (state, action) => {
            if (action.payload.type in tableTypes) {
                state.push({
                    id: nanoid(),
                    type: action.payload.type,
                    variable_ids: action.payload.variable_ids || [],
                });
            } else {
                console.error(`Invalid table type of type ${action.payload.type}.\nMust be one of ${tableTypes}.`);
            }
        },
        removeTable: (state, action) => {
            const table = state.find(table => table.id === action.payload.id);
            state = state.splice(state.indexOf(table), 1)
        },
        updateTableVariables: (state, action) => {
            const table = state.find(table => table.id === action.payload.id);
            if (table) {
                table.variable_ids = action.payload.variable_ids;
            }
        }
    }
});

export const { createTable, removeTable, updateTableVariables } = variableSlice.actions;
export const { MARGINAL_TABLE, CONDITIONAL_TABLE, JOINT_TABLE } = tableTypes;

export default variableSlice.reducer;
