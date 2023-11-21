import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'utils/axios';
import { type AxiosError } from 'axios';

const { REACT_APP_URL_API } = process.env;
const urlApi: string = REACT_APP_URL_API as string;

// Informacion a recibir del componete
export interface ClientData {
  businessName: string;
  cuit: string;
  phone: string;
  altPhone: string;
  address: string;
  city: string;
  CP: string;
}

// Definicion de initial state
export interface ClientState {
  id: number;
  businessName: string;
}

const initialState: {
  client: ClientState;
  clientsList: ClientState[];
  uploadProgress: number | null;
} = {
  client: {
    id: 0,
    businessName: 'null'
  },
  clientsList: [],
  uploadProgress: null
};

// Definicion de respuesta del back

interface ClientResponse {
  data: {
    id: number;
    businessName: string;
  };
}

export const createClient = createAsyncThunk<
  ClientResponse,
  ClientData,
  { rejectValue: AxiosError }
>('client/createClient', async (data: ClientData, thunkAPI) => {
  try {
    console.log('data', data);

    const response = await axios.post(`${urlApi}/client/createClient`, data, {
      signal: thunkAPI.signal
    });
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as AxiosError);
  }
});

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.uploadProgress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClient.pending, (state) => {
        console.log('pending', state);
      })
      .addCase(createClient.fulfilled, (state, action) => {
        console.log('fulfilled', state, action);
      })
      .addCase(createClient.rejected, (state, action) => {
        console.log('rejected', state, action);
      });
  }
});

export default clientSlice.reducer;
