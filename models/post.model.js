const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vay thế chấp
const PostSchema = new Schema({
  // THÔNG TIN CHUNG
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  state: {
    type: String,
    required: true,
    enum: ['PENDING', 'PURCHASED', 'DISBURSED', 'CANCELED'],
    default: 'PENDING'
  },
  purchaser: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  // Giá một bài đăng
  price: {
    initial: {
      type: Number,
      default: 25000,
      required: true
    },
    discount: {
      type: Number,
      default: 1,
      required: true
    }
  },
  // Bảng 0
  typeOfLoan: {
    type: String,
    required: true
  },

  // BẢNG 1
  loanNumber: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    fromDate: {
      type: Date,
      default: Date.now()
    },
    duration: {
      type: String,
      required: true
    }
  },
  address: {
    province: {
      type: String,
      required: true
    }, // Tỉnh
    district: {
      type: String,
      required: true
    } // Huyện
  },

  // BẢNG 2
  personalInfo: {
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other']
    },
    CMND: {
      type: String
    },
    DateOfBirth: {
      type: Date,
      default: Date.now()
    },
    email: {
      type: String
    }
  },

  // BẢNG 3
  careerInfo: {
    // Công việc hiện tại
    career: String,
    // Thu nhập hiện tại
    income: String,
    // Thông tin của công ty
    comName: String,
    comAddress: String,
    comPhone: String
  },
  bank: {
    bankName: String,
    bankID: String
  },

  // BẢNG 4
  property1: [
    // Nhận vào là 1 String
    {
      keyProp: String,
      valueProp: String
    }
  ],
  property2: {
    residence: String,
    originalDocs: String,
    borrowing: String
  },

  // BẢNG 5
  relatives: {
    relName: String,
    whatRels: String,
    relPhone: String
  },

  censorship: {
    // Chứng minh thư nhân dân ID
    identification: {
      type: Array,
      default: []
    },
    // ảnh hộ khẩu, cư trú
    householdPhoto: {
      type: Array,
      default: []
    },
    // ảnh tài sản

    propertyPhoto: {
      type: Array,
      default: []
    },
    // thu nhập
    incomePhoto: {
      type: Array,
      default: []
    }
  }
});
const MortgageLoan = mongoose.model('posts', PostSchema);
module.exports = MortgageLoan;
