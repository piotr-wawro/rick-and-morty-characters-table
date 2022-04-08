import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface PageSelectorState {
    pageCount: number,
    currentPage: number,
}

const initialState: PageSelectorState = {
    pageCount: 10,
    currentPage: 1,
}

export const pageSelectorSlice = createSlice({
    name: 'pageSelector',
    initialState,
    reducers: {
        setPageCount: (state: PageSelectorState, action: PayloadAction<number>) => {
            state.pageCount = action.payload;
        },
        setCurrentPage: (state: PageSelectorState, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    }
})

export const { setPageCount, setCurrentPage } = pageSelectorSlice.actions;

export const selectPageCount = (state: RootState) => state.pageSelector.pageCount
export const selectCurrnetPage = (state: RootState) => state.pageSelector.currentPage

export default pageSelectorSlice.reducer;
