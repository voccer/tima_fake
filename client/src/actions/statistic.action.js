import axios from 'axios';
import {
  GET_ERRORS,
  COUNT_USER,
  COUNT_MONEY,
  SET_LOOK_UP_USER
} from './actionTypes';
export const countUser = () => dispatch => {
  axios
    .get('/api/statistic/count/users')
    .then(res =>
      dispatch({
        type: COUNT_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const countMoney = () => dispatch => {
  axios
    .get('/api/statistic/count/money')
    .then(res =>
      dispatch({
        type: COUNT_MONEY,
        payload: res.data.total[0].total
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const lookUpUser = (data, field) => dispatch => {
  axios.post(`/api/loan/lookup/${field}`, data).then(res => {
    dispatch({
      type: SET_LOOK_UP_USER,
      payload: res.data
    });
  });
};
