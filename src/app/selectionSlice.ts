import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface SelectionState {
    selected: {
        [key: number]: boolean;
    }
}

const initialState: SelectionState = {
    selected: {}
}

export const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        select: (state: SelectionState, action: PayloadAction<number>) => {
            state.selected[action.payload] = true
        },
        multiSelect: (state: SelectionState, action: PayloadAction<Array<number>>) => {
            action.payload.forEach(element => {
                state.selected[element] = true
            });
        },
        unselect: (state: SelectionState, action: PayloadAction<number>) => {
            state.selected[action.payload] = false
        },
        multiUnselect: (state: SelectionState, action: PayloadAction<Array<number>>) => {
            action.payload.forEach(element => {
                state.selected[element] = false
            });
        },
        switchState: (state: SelectionState, action: PayloadAction<number>) => {
            state.selected[action.payload] === false ||
            state.selected[action.payload] === undefined ?
            state.selected[action.payload] = true :
            state.selected[action.payload] = false
        }
    }
})

export const { select, multiSelect, unselect, multiUnselect, switchState } = selectionSlice.actions

export const selectSelected = (state: RootState) => state.selection.selected

export default selectionSlice.reducer;
