/* eslint-disable no-param-reassign */
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = {
  Post1: data => {
    const errors = {};
    data.typeOfLoan = !isEmpty(data.typeOfLoan) ? data.typeOfLoan : '';
    data.loanNumber = !isEmpty(data.loanNumber) ? data.loanNumber : '';
    data.duration = !isEmpty(data.duration) ? data.duration : '';

    if (Validator.isEmpty(data.typeOfLoan)) {
      errors.typeOfLoan = 'Số tiền vay không được bỏ trống';
    }
    if (Validator.isEmpty(data.loanNumber)) {
      errors.loanNumber = 'Số tiền vay không được bỏ trống';
    } else if (!Validator.isNumeric(data.loanNumber)) {
      errors.loanNumber = 'Số tiền vay phải là chữ số';
    } else if (!Validator.isInt(data.loanNumber, { min: 5, max: 100 })) {
      errors.loanNumber = 'Số tiền vay giới hạn từ 5 đến 100 triệu';
    }
    if (Validator.isEmpty(data.duration)) {
      errors.duration = 'Thời gian vay không được bỏ trống';
    } else if (!Validator.isNumeric(data.duration)) {
      errors.duration = 'duration field must be numeric';
    } else if (!Validator.isInt(data.duration, { min: 1, max: 120 })) {
      errors.duration = 'Thời gian vay giới hạn từ 1 tháng đến 10 năm';
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  },
  Post2: data => {
    const errors = {};

    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.CMND = !isEmpty(data.CMND) ? data.CMND : '';
    // data.DateOfBirth = !isEmpty(data.DateOfBirth) ? data.DateOfBirth : '';
    data.email = !isEmpty(data.email) ? data.email : '';

    if (Validator.isEmpty(data.gender)) {
      errors.gender = 'Giới tính không được bỏ trống';
    }
    if (Validator.isEmpty(data.CMND)) {
      errors.CMND = 'CMND không được bỏ trống';
    } else if (!Validator.isNumeric(data.CMND)) {
      errors.CMND = 'CMND phải là số';
    } else if (!Validator.isLength(data.CMND, { min: 9, max: 9 })) {
      errors.CMND = 'CMND không hợp lệ';
    }
    if (!Validator.isEmpty(data.email) && !Validator.isEmail(data.email)) {
      errors.email = 'Email không được bỏ trống';
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  },
  Post3: data => {
    const errors = {};

    data.career = !isEmpty(data.career) ? data.career : '';
    data.income = !isEmpty(data.income) ? data.income : '';
    data.comName = !isEmpty(data.comName) ? data.comName : '';
    data.comAddress = !isEmpty(data.comAddress) ? data.comAddress : '';
    data.comPhone = !isEmpty(data.comPhone) ? data.comPhone : '';
    data.bankName = !isEmpty(data.bankName) ? data.bankName : '';
    data.bankID = !isEmpty(data.bankID) ? data.bankID : '';

    return {
      errors,
      isValid: isEmpty(errors),
    };
  },
  Post4: data => {
    const errors = {};

    return {
      errors,
      isValid: isEmpty(errors),
    };
  },
  Post5: data => {
    const errors = {};

    data.relName = !isEmpty(data.relName) ? data.relName : '';
    data.whatRels = !isEmpty(data.whatRels) ? data.whatRels : '';
    data.relPhone = !isEmpty(data.relPhone) ? data.relPhone : '';

    if (Validator.isEmpty(data.relName)) {
      errors.relName = 'Trường này không được bỏ trống';
    }

    if (Validator.isEmpty(data.relPhone)) {
      errors.relPhone = 'Trường này không được bỏ trống';
    }
    return {
      errors,
      isValid: isEmpty(errors),
    };
  },

  Post6: data => {
    const errors = {};
    // data.fromDate = !isEmpty(data.fromDate) ? data.fromDate : '';
    data.province = !isEmpty(data.province) ? data.province : '';
    data.district = !isEmpty(data.district) ? data.district : '';

    // data.field1 = !isEmpty(data.field1) ? data.field1 : '';
    // data.field2 = !isEmpty(data.field2) ? data.field2 : '';
    // data.field3 = !isEmpty(data.field3) ? data.field3 : '';
    // data.field4 = !isEmpty(data.field4) ? data.field4 : '';
    // data.field5 = !isEmpty(data.field5) ? data.field5 : '';

    data.identification = !isEmpty(data.identification)
      ? data.identification
      : '';
    data.householdPhoto = !isEmpty(data.householdPhoto)
      ? data.householdPhoto
      : '';
    data.propertyPhoto = !isEmpty(data.propertyPhoto) ? data.propertyPhoto : '';
    data.incomePhoto = !isEmpty(data.incomePhoto) ? data.incomePhoto : '';

    if (Validator.isEmpty(data.province)) {
      errors.province = 'Tỉnh không được bỏ trống';
    }
    if (Validator.isEmpty(data.district)) {
      errors.district = 'QUận/huyện không được bỏ trống';
    }

    if (Validator.isEmpty(data.career)) {
      errors.career = 'Nghề nghiệp không được bỏ trống';
    }
    if (Validator.isEmpty(data.income)) {
      errors.income = 'Thu nhập không được bỏ trống';
    }

    // // Thiếu các field property ở đây
    // if (Validator.isEmpty(data.property)) {
    //   errors.property = 'property field is required';
    // }

    if (Validator.isEmpty(data.relName)) {
      errors.relName = 'Trường này không được bỏ trống';
    }
    if (Validator.isEmpty(data.whatRels)) {
      errors.whatRels = 'Trường này không được bỏ trống';
    }
    if (Validator.isEmpty(data.relPhone)) {
      errors.relPhone = 'Trường này không được bỏ trống';
    }

    return {
      errors,
      isValid: isEmpty(errors),
    };
  },
};
