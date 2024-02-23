import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const FormSlice = createSlice({
    name: "FormDetails",
    initialState,
    reducers: {
        submitForm: (state, action) => {
            state.push(action.payload);
        },
    },
});
export const { submitForm } = FormSlice.actions;
export default FormSlice.reducer;
