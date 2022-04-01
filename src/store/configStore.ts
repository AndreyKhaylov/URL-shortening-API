import { combineReducers, configureStore } from '@reduxjs/toolkit';
import linkReducer from './slice/LinkSlice';

const rootReducer = combineReducers({
  links: linkReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']