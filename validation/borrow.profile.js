/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
  const errors = {};

  data.avatar = !isEmpty(data.avatar) ? data.avatar : '';
  data.CMND = !isEmpty(data.CMND) ? data.CMND : '';
  data.income = !isEmpty(data.income) ? data.income : '';
  data.DateOfBirth = !isEmpty(data.DateOfBirth) ? data.DateOfBirth : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.province = !isEmpty(data.province) ? data.province : '';
  data.district = !isEmpty(data.district) ? data.district : '';
  data.ward = !isEmpty(data.ward) ? data.ward : '';
  data.details = !isEmpty(data.details) ? data.details : '';
  //
  data.career = !isEmpty(data.career) ? data.career : '';

  data.comName = !isEmpty(data.comName) ? data.comName : '';
  data.comAddress = !isEmpty(data.comAddress) ? data.comAddress : '';
  data.comPhone = !isEmpty(data.comPhone) ? data.comPhone : '';

  data.relName = !isEmpty(data.relName) ? data.relName : '';
  data.whatRels = !isEmpty(data.whatRels) ? data.whatRels : '';
  data.relPhone = !isEmpty(data.relPhone) ? data.relPhone : '';

  data.cmndPhoto = !isEmpty(data.cmndPhoto) ? data.cmndPhoto : '';
  data.portraitPhoto = !isEmpty(data.portraitPhoto) ? data.portraitPhoto : '';
  data.incomePhoto = !isEmpty(data.incomePhoto) ? data.incomePhoto : '';

  data.authenticated = !isEmpty(data.authenticated)
    ? data.authenticated
    : false;

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Giới tính không được bỏ trống';
  } else if (
    data.gender !== 'Male' &&
    data.gender !== 'Male' &&
    data.gender !== 'Other'
  ) {
    errors.gender = 'Giới tính không hợp lệ';
  }
  // if (Validator.isEmpty(data.DateOfBirth)) {
  //   errors.DateOfBirth = 'Date of birth field is required';
  // }

  if (!Validator.isURL(data.avatar) && !Validator.isEmpty(data.avatar)) {
    errors.avatar = 'Avatar không hợp lệ';
  }

  // if (
  //   !Validator.isURL(data.identification) &&
  //   !Validator.isEmpty(data.identification)
  // ) {
  //   errors.identification = 'Identification photo is invalid';
  // }
  // if (!Validator.isURL(data.portrait) && !Validator.isEmpty(data.portrait)) {
  //   errors.identification = 'Portrait photo is invalid';
  // }
  // if (!Validator.isURL(data.income) && !Validator.isEmpty(data.income)) {
  //   errors.identification = 'Portrait photo is invalid';
  // }
  if (!Validator.isEmail(data.email) && !Validator.isEmpty(data.email)) {
    errors.email = 'Email không hợp lệ';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
