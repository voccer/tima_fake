/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.phone)) {
    errors.login = 'Vui lòng nhập số điện thoại';
  }
  // else if (!Validator.isEmail(data.phone)) {
  //   errors.phone = 'Email is invalid';
  // }

  if (Validator.isEmpty(data.password)) {
    errors.login = 'Vui lòng nhập mật khẩu';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
