import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import linkReducer from './slice/LinkSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  links: linkReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = () => configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [
              FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER,
          ],
      }
    })
  })


export const persistor = persistStore(store());

export type RootState = ReturnType<typeof persistedReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
