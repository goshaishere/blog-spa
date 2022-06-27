import * as TYPE from '../constants/ActionTypes'

const defaultState = {
  response: [],
  cards: [],
  isFetching: true,
  isFetchError: false,
};

export default function responseReducer(state = defaultState, action) {
  switch (action.type) {
    case TYPE.SET_CARDS:
      return {
        ...state,
        isFetching: false,
        response: action.payload,
        cards: action.payload.data.articles
      };
    case TYPE.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case TYPE.SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
}

export const setIsFetching = (bool) => ({
  type: TYPE.SET_IS_FETCHING,
  payload: bool,
});
export const setFetchError = (bool) => ({
  type: TYPE.SET_FETCH_ERROR,
  payload: bool,
});

export const setCards = (cards) => ({ type: TYPE.SET_CARDS, payload: cards });
