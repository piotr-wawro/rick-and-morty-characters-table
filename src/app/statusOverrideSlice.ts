import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "./filterSlice";
import { RootState } from "./store";

export interface StatusOverrideState {
    status: {
        [key: number]: Status;
    }
}

const initialState: StatusOverrideState = {
    status: {}
}

export const statusOverrideSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        overrideStatus: (state: StatusOverrideState, action: PayloadAction<{id: number, status: Status}>) => {
            state.status[action.payload.id] = action.payload.status
        },
    }
})

export const { overrideStatus } = statusOverrideSlice.actions

export const selectOverrideStatus = (state: RootState) => state.status.status

export default statusOverrideSlice.reducer;
