import * as TYPE from '../constants/ActionTypes'


const defaultState = {
    name: null,
    dateFrom: null,
    dateTo: null
};

export default function cardFiltersReducer(state = defaultState, action) {
  switch (action.type) {
    case TYPE.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    case TYPE.SET_DATE_FROM:
      return {
        ...state,
        dateFrom: action.payload,
      };
    case TYPE.SET_DATE_TO:
      return {
        ...state,
        dateTo: action.payload,
      };
    default:
      return state;
  }
}

export const setName = (name) => ({
  type: TYPE.SET_NAME,
  payload: name,
});

export const setDateFrom = (date) => ({
  type: TYPE.SET_DATE_FROM,
  payload: date,
});

export const setDateTo = (date) => ({
    type: TYPE.SET_DATE_TO,
    payload: date,
  });