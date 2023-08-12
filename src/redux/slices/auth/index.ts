import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';

import axios from 'utils/axios';
import { enqueueSnackbar } from 'notistack';

export interface LoginData {
  username: string;
  password: string;
  keepLogged: boolean;
}

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isLoading: false
};

const { REACT_APP_URL_API } = process.env;

const urlApi: string = REACT_APP_URL_API as string;

interface Error {
  message: string;
  response: { status: number; statusText: string };
}

interface MyData {
  data: {
    access_token: string;
    user: {
      createdAt: string;
      deletedAt: string | null;
      emaik: string;
      id: number;
      firstName: string;
      lastName: string;
      updateAt: string;
      username: string;
    };
  };
  status: number;
  keepLogged: boolean;
}

export const userLogin = createAsyncThunk<
  MyData,
  LoginData,
  { rejectValue: Error }
>('user/loginUser', async (data: LoginData, thunkAPI) => {
  try {
    const response = await axios.post(`${urlApi}/auth/local/signin`, data, {
      signal: thunkAPI.signal
    });
    return {
      data: response.data,
      status: response.status,
      keepLogged: data.keepLogged
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error as Error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        console.log('1');
        state.accessToken = null;
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log('2');
        console.log(action);
        if (action.payload.status === 401)
          enqueueSnackbar(`El usuario o contraseña son inválidos`, {
            variant: 'error'
          });
        if (action.payload.status === 400)
          enqueueSnackbar(`El usuario no existe, regístrese`, {
            variant: 'error'
          });
        if (action.payload.status === 200) {
          state.accessToken = action.payload.data.access_token;
          state.isLoading = false;
          enqueueSnackbar(`Bienvenido, ${action.payload.data.user.firstName}`, {
            variant: 'success'
          });
          if (action.payload.keepLogged) {
            localStorage.setItem(
              'userData',
              JSON.stringify(action.payload.data.user)
            );
          } else {
            sessionStorage.setItem(
              'userData',
              JSON.stringify(action.payload.data.user)
            );
          }
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        if (action.payload?.response.status === 404)
          enqueueSnackbar(`Contraseña incorrecta`, {
            variant: 'error'
          });
      });
  }
});

export const { setAccessToken, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

// export const loginUser =
//   (data: LoginData): Thunk =>
//   async (dispatch): Promise<AxiosResponse | AxiosError> => {
//     dispatch(setIsLoading(true));
//     try {
//       const response: AxiosResponse = await axios.post(
//         '/auth/local/signin',
//         data
//       );
//       dispatch(setAccessToken(response.data.access_token));
//       return response;
//     } catch (error) {
//       return error as AxiosError;
//     } finally {
//       dispatch(setIsLoading(false));
//     }
//   };
