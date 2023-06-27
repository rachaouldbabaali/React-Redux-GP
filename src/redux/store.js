import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketsSlice,
    mission: missionsSlice,
  },
});

export default store;
