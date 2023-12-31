import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import { rocketsReducer } from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
