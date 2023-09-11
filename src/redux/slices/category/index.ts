import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'utils/axios';
import { type AxiosError } from 'axios';

const { REACT_APP_URL_API } = process.env;
const urlApi: string = REACT_APP_URL_API as string;

// Informacion a recibir del componete
export interface CategoryData {
  categoryName: string;
  description: string | null;
}

// Definicion de initial state
export interface CategoryState {
  id: number;
  categoryName: string;
  image: string;
}

const initialState: CategoryState = {
  id: 0,
  categoryName: 'null',
  image: 'null'
};

// Definicion de respuesta del back

interface CategoryResponse {
  data: {
    id: number;
    categoryName: string;
    image: string;
  };
}

export const createCategory = createAsyncThunk<
  CategoryResponse,
  CategoryData,
  { rejectValue: AxiosError }
>('category/createCategory', async (data: CategoryData, thunkAPI) => {
  try {
    const response = await axios.post(`${urlApi}/category`, data, {
      signal: thunkAPI.signal
    });
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as AxiosError);
  }
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {})
      .addCase(createCategory.fulfilled, (state, action) => {})
      .addCase(createCategory.rejected, (state, action) => {});
  }
});

export default categorySlice.reducer;
