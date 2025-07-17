import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleSearchView: false
    },
    reducers: {
        toggleSearch: (state) => {
            state.toggleSearchView = !state.toggleSearchView;
        }   
    }
});

export const { toggleSearch } = gptSlice.actions;
export default gptSlice.reducer;