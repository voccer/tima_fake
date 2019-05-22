const mongoose = require('mongoose');

const { Schema } = mongoose;
// Tài khoản dành cho người cho vay
const LoanProfileSchema = new Schema({
  // Thông tin chung
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  avatar: {
    type: String
  },
  // Số dư trong tài khoản
  balance: {
    type: Number,
    required: true,
    default: 0
  },
  // Thông tin liên quan đến vay nợ

  typeOfCredit: {
    type: String,
    enum: ['bank', 'personal'],
    default: 'personal',
    required: true
  },
  CMND: {
    type: String
  },
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
  // CÁC GÓI SẢN PHẨM BẠN NHẬN ĐƠN VAY
  //   Vay tín chấp theo lương
  //   Vay theo đăng ký xe máy
  //   Vay theo sổ hộ khẩu
  //   Vay theo đăng ký xe ô tô
  //   Vay trả góp theo ngày
  //   Cầm sổ đỏ nhà đất
  //   Vay theo hóa đơn điện nước
  packages: {
    type: Array,
    default: []
  },
  reciveDistrict: {
    type: Array,
    default: []
  },
  // chỉ lưu ảnh
  censorship: {
    // Chứng minh thư nhân dân ID
    identification: { type: Array },
    // Ảnh chân dung
    portrait: { type: Array }
  },
  // Trạng thái tài khoản đã xác thực
  authenticated: {
    type: Boolean,
    default: false
  }
});
const Profile = mongoose.model('loanProfiles', LoanProfileSchema);
module.exports = Profile;
