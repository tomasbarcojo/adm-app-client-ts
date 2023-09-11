import {
  configureStore,
  type ThunkAction,
  type Action
} from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import categoryReducer from './slices/category';

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare({
      serializableCheck: false
    })
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export default store;
