import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rickAndMortyApi } from 'api/rickAndMortyApi';
import { RootState } from 'app/store';
import { setName, setOrigin, setSpecies, setStatus } from './filterSlice';

export interface PageSelectorState {
    pageCount: number,
    currentPage: number,
}

const initialState: PageSelectorState = {
    pageCount: 0,
    currentPage: 0,
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
    },
    extraReducers: (builder) => {
        builder
        .addCase(setName, (state, action) => {
            state.currentPage = 1
        })
        .addCase(setSpecies, (state, action) => {
            state.currentPage = 1
        })
        .addCase(setOrigin, (state, action) => {
            state.currentPage = 1
        })
        .addCase(setStatus, (state, action) => {
            state.currentPage = 1
        })
        .addMatcher(rickAndMortyApi.endpoints.getCharacters.matchFulfilled,
            (state, action) => {
                state.pageCount = action.payload.data.characters.info.pages
            }
        )
    }
})

export const { setPageCount, setCurrentPage } = pageSelectorSlice.actions;

export const selectPageCount = (state: RootState) => state.pageSelector.pageCount
export const selectCurrnetPage = (state: RootState) => state.pageSelector.currentPage

export default pageSelectorSlice.reducer;
