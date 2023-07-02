import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from '../api/baseApi';
import { loadingSlice } from './slices/loadingSlice';
import { mainSlice } from './slices/mainSlice';
import { modalSlice } from './slices/modalSlice';
import { resultSlice } from './slices/resultSlice';

const persistConfig = {
  key: 'chat',
  version: 1,
  storage,
  whitelist: ['main'],
};

const baseReducers = combineReducers({
  // Add the generated reducer as a specific top-level slice
  main: mainSlice.reducer,
  loading: loadingSlice.reducer,
  modal: modalSlice.reducer,
  result: resultSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, baseReducers);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

// Export persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
