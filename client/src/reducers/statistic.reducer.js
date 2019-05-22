import {
  COUNT_USER,
  COUNT_MONEY,
  SET_LOOK_UP_USER,
  CLEAR_LOOK_UP_USER
} from '../actions/actionTypes';

const initialState = {
  loan: null,
  borrow: null,
  total: null,
  money: null,
  lookup: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNT_USER:
      return {
        ...state,
        borrow: payload.borrow,
        loan: payload.loan,
        total: payload.loan + payload.borrow
      };

    case COUNT_MONEY:
      return {
        ...state,
        money: payload
      };
    case SET_LOOK_UP_USER:
      return {
        ...state,
        lookup: payload
      };
    case CLEAR_LOOK_UP_USER:
      return {
        ...state,
        lookup: null
      };

    default:
      return state;
  }
};
