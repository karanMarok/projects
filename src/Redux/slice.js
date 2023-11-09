import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    webpage: "",
    contents: {
        section: []
    },
    size: ""
}

export const WebpageSlice = createSlice({
    name: "webpage",
    initialState,
    reducers: {
        update: (action, state) => {
            return state;
        }
    }
})

export const { update } = WebpageSlice.actions;

export default WebpageSlice.reducer;

