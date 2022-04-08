import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export enum Species {
    NONE = '',
    HUMAN = 'Human',
    ALIEN = 'Alien',
}

export enum Origin {
    NONE = '',
    EARTH_C137 = 'Earth (C-137)',
    ABADANGO = 'Abadango',
}

export enum Status {
    NONE = '',
    ALIVE = 'Alive',
    UNKNOWN = 'unknown',
    DEAD = 'Dead'
}

export interface FilterState {
    search: string;
    species: Species;
    origin: Origin;
    status: Status;
}

const initialState: FilterState = {
    search: '',
    species: Species.NONE,
    origin: Origin.NONE,
    status: Status.NONE,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearch: (state: FilterState, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSpecies: (state: FilterState, action: PayloadAction<Species>) => {
            state.species = action.payload;
        },
        setOrigin: (state: FilterState, action: PayloadAction<Origin>) => {
            state.origin = action.payload;
        },
        setStatus: (state: FilterState, action: PayloadAction<Status>) => {
            state.status = action.payload;
        },
    }
})

export const { setSearch, setSpecies, setOrigin, setStatus } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter
export const selectSearch = (state: RootState) => state.filter.search
export const selectSpecies = (state: RootState) => state.filter.species
export const selectOrigin = (state: RootState) => state.filter.origin
export const selectStatus = (state: RootState) => state.filter.status

export default filterSlice.reducer;
