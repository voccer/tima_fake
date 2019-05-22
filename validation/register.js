/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : '';
  data.phone = !isEmpty(data.phone) ? data.phone : '';
  data.province = !isEmpty(data.province) ? data.province : '';
  data.district = !isEmpty(data.district) ? data.district : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.typeOfAcc = !isEmpty(data.typeOfAcc) ? data.typeOfAcc : '';

  if (!Validator.isLength(data.fullname, { min: 2, max: 30 })) {
    errors.fullname = 'Tên phải chứa từ 2 đến 30 ký tự';
  }

  if (Validator.isEmpty(data.fullname)) {
    errors.fullname = 'Tên không được bỏ trống';
  }
  if (Validator.isEmpty(data.typeOfAcc)) {
    errors.typeOfAcc = 'Loại tài khoản không được bỏ trống';
  } else if (data.typeOfAcc !== 'loan' && data.typeOfAcc !== 'borrow') {
    errors.typeOfAcc = 'Loại tài khoản không hợp lệ';
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Số điện thoại không được bỏ trống';
  } else if (!Validator.isNumeric(data.phone)) {
    errors.phone = 'Số điện thoại phải là số';
  } else if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone = 'Số điện thoại không hợp lệ';
  }
  if (Validator.isEmpty(data.province)) {
    errors.province = 'Tỉnh không được bỏ trống';
  }
  if (Validator.isEmpty(data.district)) {
    errors.district = 'Quận huyện không được bỏ trống';
  }
  //   } else if (!Validator.isEmail(data.phone)) {
  //     errors.phone = 'Email is invalid';
  //   }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Mật khẩu không được bỏ trống';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Mật khẩu phải chứa ít nhất 6 ký tự';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Xác nhận mật khẩu không được bỏ trống';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Mật khẩu chưa khớp';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
