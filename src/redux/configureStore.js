import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companies';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export default store;
