import {createSlice} from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'lang',
    initialState: {
        language: 'hindi'
    },
    reducers: {
        chooseLanguage: (state, action) => {
            state.language = action.payload; 
        } 
    }
});

export const {chooseLanguage} = langSlice.actions;
export default langSlice.reducer;