import { configureStore } from "@reduxjs/toolkit";
import formDetails from "../features/form_details/FormSlice";

export const store = configureStore({
    reducer: { form: formDetails },
});
