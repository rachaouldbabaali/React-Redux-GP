import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  loading: false,
  rockets: [],
  reserved: false,
  error: '',
};

export const fetchData = createAsyncThunk('rockets/fetchData', () => axios
  .get(URL)
  .then((response) => response.data));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const states = state;
      states.rockets = action.payload;
    },
    cancelRocket: (state, action) => {
      const states = state;
      states.rockets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      const states = state;
      states.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const states = state;
      states.loading = false;
      states.rockets = action.payload;
      states.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      const states = state;
      states.loading = false;
      states.rockets = [];
      states.error = action.error.message;
    });
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
