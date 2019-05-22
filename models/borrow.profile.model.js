const mongoose = require('mongoose');

const { Schema } = mongoose;
// Tài khoản dành cho người vay tiền
const BorrowProfileSchema = new Schema({
  // Thông tin chung
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  avatar: {
    type: String
  },
  CMND: {
    type: String
  },
  income: String,

  DateOfBirth: {
    type: Date,
    default: Date.now()
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
    default: 'Other'
  },
  email: {
    type: String
  },
  address: {
    province: { type: String }, // Tỉnh
    district: { type: String }, // Huyện
    ward: { type: String }, // Phường
    details: { type: String } // Mô tả thêm
  },
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
  relatives: {
    relName: String,
    whatRels: String,
    relPhone: String
  },
  // chỉ lưu ảnh
  censorship: {
    // Chứng minh thư nhân dân ID
    identification: {
      type: Array,
      default: []
    },
    // Ảnh chân dung
    portrait: {
      type: Array,
      default: []
    },
    // thu nhập
    incomePhoto: {
      type: Array,
      default: []
    }
  },
  // Trạng thái tài khoản đã xác thực
  authenticated: {
    type: Boolean,
    default: false
  }
});
const Profile = mongoose.model('borrowProfiles', BorrowProfileSchema);
module.exports = Profile;
