import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rickAndMortyApi } from 'api/rickAndMortyApi';
import filterReducer from './filterSlice';
import pageSelectorReducer from './pageSelectorSlice'
import selectionReducer from './selectionSlice'
import statusReducer from './statusSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pageSelector: pageSelectorReducer,
    selection: selectionReducer,
    status: statusReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      rickAndMortyApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
