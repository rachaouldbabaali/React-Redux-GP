import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

export const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
    setMissionsStatus: (state, action) => {
      state.status = action.payload;
    },
    setMissionsError: (state, action) => {
      state.error = action.payload;
    },
    reserveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = true;
      }
    },
    cancelMissionReservation: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = false;
      }
    },
  },
});

export const {
  setMissions,
  setMissionsStatus,
  setMissionsError,
  reserveMission,
  cancelMissionReservation,
} = missionSlice.actions;

export const fetchMissions = () => async (dispatch) => {
  dispatch(setMissionsStatus('loading'));

  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    dispatch(setMissions(response.data));
    dispatch(setMissionsStatus('succeeded'));
  } catch (error) {
    dispatch(setMissionsError(error.message));
    dispatch(setMissionsStatus('failed'));
  }
};

export const selectMissions = (state) => state.missions.missions;
export const selectMissionsStatus = (state) => state.missions.status;
export const selectMissionsError = (state) => state.missions.error;

export default missionSlice.reducer;
