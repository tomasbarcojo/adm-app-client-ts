import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'utils/axios';
import { type AxiosError } from 'axios';

const { REACT_APP_URL_API } = process.env;
const urlApi: string = REACT_APP_URL_API as string;

// Informacion a recibir del componete
export interface CategoryData {
  categoryName: string;
  description: string | null;
  files: File | null;
  image: string;
}

// Definicion de initial state
export interface CategoryState {
  id: number;
  categoryName: string;
  image: string;
}

const initialState: {
  category: CategoryState;
  categoriesList: CategoryState[];
  uploadProgress: number | null;
} = {
  category: {
    id: 0,
    categoryName: 'null',
    image: 'null'
  },
  categoriesList: [],
  uploadProgress: null
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
    console.log('data', data);

    const formData = new FormData();
    formData.append('file', data.files as File);

    console.log('formData', formData);

    const imageUrl = await axios.post(`${urlApi}/upload/single`, formData, {
      onUploadProgress: (ProgressEvent) => {
        const total = ProgressEvent.total as number;
        // setProgress((ProgressEvent.loaded / total) * 100);
        console.log('upload progress', (ProgressEvent.loaded / total) * 100);
      }
    });

    data = { ...data, image: imageUrl.data.imageName };

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
  reducers: {
    setProgress: (state, action) => {
      state.uploadProgress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        console.log('pending', state);
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        console.log('fulfilled', state, action);
      })
      .addCase(createCategory.rejected, (state, action) => {
        console.log('rejected', state, action);
      });
  }
});

export default categorySlice.reducer;
