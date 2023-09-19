import {
  configureStore,
  type ThunkAction,
  type Action
} from '@reduxjs/toolkit';

import authReducer from './slices/auth';
import categoryReducer from './slices/category';
import productReducer from './slices/products';

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer
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
