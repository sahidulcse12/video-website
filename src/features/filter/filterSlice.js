const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    tags: [],
    search: "",
}


const filterSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },

        tagRemoved: (state, action) => {
            const indexRemoved = state.tags.indexOf(action.payload);

            if (indexRemoved !== -1) {
                state.tags.splice(indexRemoved, 1);
            }
        },

        searched: (state, action) => {
            state.search = action.payload;
        },
    },
})

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;