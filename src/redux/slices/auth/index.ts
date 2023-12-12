import {
  createAsyncThunk,
  createSlice,
  type PayloadAction
} from '@reduxjs/toolkit';

import axios from 'utils/axios';
import { enqueueSnackbar } from 'notistack';
import { type AxiosResponse, type AxiosError } from 'axios';

export interface LoginData {
  username: string;
  password: string;
  keepLogged: boolean;
}

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
  error: any;
}

const initialState: AuthState = {
  accessToken: null,
  isLoading: false,
  error: null
};

interface AuthResponse {
  tokens: {
    access_token: string;
    refresh_token: string;
  };
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    createdAt: string;
    deletedAt: string | null;
    updateAt: string;
  };
}

export const userLogin = createAsyncThunk<
  AxiosResponse<AuthResponse>,
  LoginData,
  { rejectValue: AxiosError }
>('user/loginUser', async (data: LoginData, thunkAPI) => {
  try {
    const response = await axios.post<AuthResponse>(
      `/auth/local/signin`,
      data,
      {
        signal: thunkAPI.signal
      }
    );
    localStorage.setItem('token', response.data.tokens.access_token);
    localStorage.setItem('refreshToken', response.data.tokens.refresh_token);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as AxiosError);
  }
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  await axios.post(`/auth/logout`);
  localStorage.clear();
  window.location.assign('/login');
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
        state.accessToken = null;
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.accessToken = action.payload.data.tokens.access_token;
          state.isLoading = false;
          enqueueSnackbar(`Bienvenido, ${action.payload.data.user.firstName}`, {
            variant: 'success'
          });
          if (action.meta.arg.keepLogged) {
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
        console.log(action);
        if (action.payload?.response?.status === 401)
          enqueueSnackbar(`El usuario o contraseña son inválidos`, {
            variant: 'error'
          });
        if (action.payload?.response?.status === 400)
          enqueueSnackbar(`El usuario no existe, regístrese`, {
            variant: 'error'
          });
      });
  }
});

export const { setAccessToken, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
