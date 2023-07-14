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

export const userLogin = createAsyncThunk(
  'user/loginUser',
  async (
    data: LoginData,
    thunkAPI
  ): Promise<{
    data: { user: { firstName: string }; access_token: string };
    status: number;
    keepLogged: boolean;
  }> => {
    const response = await axios.post(`${urlApi}/auth/local/signin`, data, {
      signal: thunkAPI.signal
    });
    return {
      data: response.data,
      status: response.status,
      keepLogged: data.keepLogged
    };
  }
);

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
        state.accessToken = null;
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
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
      .addCase(userLogin.rejected, () => {
        enqueueSnackbar(`Ocurrio un error inesperado`, {
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
