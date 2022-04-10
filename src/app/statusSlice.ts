import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "./filterSlice";
import { RootState } from "./store";

export interface StatusState {
    status: {
        [key: number]: Status;
    }
}

const initialState: StatusState = {
    status: {}
}

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        overrideStatus: (state: StatusState, action: PayloadAction<{id: number, status: Status}>) => {
            state.status[action.payload.id] = action.payload.status
        },
    }
})

export const { overrideStatus } = statusSlice.actions

export const selectOverrideStatus = (state: RootState) => state.status.status

export default statusSlice.reducer;
