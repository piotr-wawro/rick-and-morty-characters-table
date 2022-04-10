import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export enum Species {
    NONE = '',
    HUMAN = 'Human',
    ALIEN = 'Alien',
    HUMANOID = 'Humanoid',
    UNKNOWN = 'unknown',
    POOPYBUTTHOLE = 'Poopybutthole',
    MYTHOLOGICALCREATURE = 'Mythological Creature',
    ANIMAL = 'Animal',
    CRONENBERG = 'Cronenberg',
    DISEASE = 'Disease',
    ROBOT = 'Robot',
}

export enum Origin {
    NONE = '',
    PLANET = 'Planet',
    UNKNOWN = 'unknown',
    CLUSTER = 'Cluster',
    FANTASYTOWN = 'Fantasy town',
    MICROVERSE = 'Microverse',
    GAME = 'Game',
    DREAM = 'Dream',
    BOX = 'Box',
    DWARFPLANET= 'Dwarf planet',
    MACHINE = 'Machine',
    TV = 'TV',
    DIMENSION = 'Dimension',
    SPACESTATION = 'Space station',
    QUASAR = 'Quasar',
    LIQUID = 'Liquid',
    MOUNT = 'Mount',
    WOODS = 'Woods',
    DIEGESIS = 'Diegesis',
    NIGHTMARE = 'Nightmare',
    ASTEROID = 'Asteroid',
    REALITY = 'Reality',
    HUMAN = 'Human',
    HELL = 'Hell',
    SPACETAHOE = 'Space Tahoe',
    CONSCIOUSNESS = 'Consciousness',
}

export enum Status {
    NONE = '',
    ALIVE = 'Alive',
    UNKNOWN = 'unknown',
    DEAD = 'Dead'
}

export interface FilterState {
    name: string;
    species: Species;
    origin: Origin;
    status: Status;
}

const initialState: FilterState = {
    name: '',
    species: Species.NONE,
    origin: Origin.NONE,
    status: Status.NONE,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setName: (state: FilterState, action: PayloadAction<string>) => {
            state.name = action.payload;
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

export const { setName, setSpecies, setOrigin, setStatus } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter
export const selectName = (state: RootState) => state.filter.name
export const selectSpecies = (state: RootState) => state.filter.species
export const selectOrigin = (state: RootState) => state.filter.origin
export const selectStatus = (state: RootState) => state.filter.status

export default filterSlice.reducer;
