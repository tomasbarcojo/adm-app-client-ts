import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'utils/axios';
import { type AxiosError } from 'axios';

export interface ProductData {
  name: string;
  categoryId: number;
  supplierId: number;
  code: string;
  price: number;
  stock: number;
  stockAlert: number;
  description: string | null;
  files: File | null;
  image: string;
}

export interface ProductState {
  id: number;
  productName: string;
  image: string;
}

const initialState: {
  product: ProductState;
  productList: ProductState[];
  uploadProgress: number | null;
} = {
  product: {
    id: 0,
    productName: 'null',
    image: 'null'
  },
  productList: [],
  uploadProgress: null
};

interface ProductResponse {
  data: {
    id: number;
    productName: string;
    image: string;
  };
}

export const createProduct = createAsyncThunk<
  ProductResponse,
  ProductData,
  { rejectValue: AxiosError }
>('product/createProduct', async (data: ProductData, thunkAPI) => {
  try {
    console.log('data', data);

    const formData = new FormData();
    formData.append('file', data.files as File);

    console.log('formData', formData);

    const imageUrl = await axios.post(`/upload/single`, formData, {
      onUploadProgress: (ProgressEvent) => {
        const total = ProgressEvent.total as number;
        // setProgress((ProgressEvent.loaded / total) * 100);
        console.log('upload progress', (ProgressEvent.loaded / total) * 100);
      }
    });

    data = { ...data, image: imageUrl.data.imageName };

    const response = await axios.post(`/product`, data, {
      signal: thunkAPI.signal
    });
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as AxiosError);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.uploadProgress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        console.log('pending', state);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        console.log('fulfilled', state, action);
      })
      .addCase(createProduct.rejected, (state, action) => {
        console.log('rejected', state, action);
      });
  }
});

export default productSlice.reducer;
