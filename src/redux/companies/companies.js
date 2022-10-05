import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_BY_SYMBOL = 'FETCH_DATA_BY_SYMBOL';
const initialState = {
  companiesData: [],
  companyDataBySymbol: {},
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        companiesData: action.payload,
      };

    case FETCH_DATA_BY_SYMBOL:
      return {
        ...state,
        companyDataBySymbol: action.payload,
      };

    default:
      return state;
  }
};

export default companiesReducer;

export const fetchData = createAsyncThunk(
  FETCH_DATA,
  async (args, { dispatch }) => {
    const response = await fetch(
      ' https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=1849291febbb7913533c2d47c76d7557',
    );
    const data = await response.json();
    dispatch({ type: FETCH_DATA, payload: data });
  },
);

export const fetchDataBySymbol = createAsyncThunk(
  FETCH_DATA_BY_SYMBOL,
  async (args, { dispatch }) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${args}?apikey=1849291febbb7913533c2d47c76d7557`,
    );
    const data = await response.json();
    dispatch({ type: FETCH_DATA_BY_SYMBOL, payload: data[0] });
  },
);
