import { configureStore } from '@reduxjs/toolkit';
import { CalReducers } from '../features/CalculatorReducer';
export const store = configureStore({
  reducer:  CalReducers
});
export default store;