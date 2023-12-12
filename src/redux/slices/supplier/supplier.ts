import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'utils/axios';
import { type AxiosError } from 'axios';
const { REACT_APP_URL_API } = process.env;
const urlApi: string = REACT_APP_URL_API as string;

// Informacion a recibir del componete
export interface SupplierData {
  businessName: string;
  cuit: string;
  phone: string;
  altPhone: string;
  address: string;
  city: string;
  CP: string;
  bankaccount1: string;
  bankaccount2: string;
  bankaccount3: string;
  obs: string;
}

// Definicion de initial state
export interface SupplierState {
  id: number;
  businessName: string;
}

const initialState: {
  supplier: SupplierState;
  suppliersList: SupplierState[];
  uploadProgress: number | null;
} = {
  supplier: {
    id: 0,
    businessName: 'null'
  },
  suppliersList: [],
  uploadProgress: null
};

// Definicion de respuesta del back

interface SupplierResponse {
  data: {
    id: number;
    businessName: string;
  };
}

export const createSupplier = createAsyncThunk<
  SupplierResponse,
  SupplierData,
  { rejectValue: AxiosError }
>('supplier/createSupplier', async (data: SupplierData, thunkAPI) => {
  try {
    console.log('data', data);

    const response = await axios.post(
      `${urlApi}/supplier/createSupplier`,
      data,
      {
        signal: thunkAPI.signal
      }
    );
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as AxiosError);
  }
});

const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.uploadProgress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSupplier.pending, (state) => {
        console.log('pending', state);
      })
      .addCase(createSupplier.fulfilled, (state, action) => {
        console.log('fulfilled', state, action);
      })
      .addCase(createSupplier.rejected, (state, action) => {
        console.log('rejected', state, action);
      });
  }
});

export default supplierSlice.reducer;
