import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        value: false,
    },
    reducers: {
        showFilters: state => {
            state.value = true;
        },
        hideFilters: (state) => {
            state.value = false;
        },
    },
})

export const { showFilters, hideFilters } = filtersSlice.actions;
export default filtersSlice.reducer;