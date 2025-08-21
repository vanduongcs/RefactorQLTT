import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  Loai: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    default: 'user',
    enum: ['user', 'admin']
  },
  TenNguoiDung: {
    type: String,
    required: true,
    trim: true
  },
  TenTaiKhoan: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 256
  },
  MatKhau: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    maxLength: 256
  },
  CCCD: {
    type: String,
    required: true,
    trim: true,
    minLength: 12,
    maxLength: 12
  },
  SDT: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
    maxLength: 11
  },
  KhoaHocDaThamGia: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    default: []
  }],
  KyThiDaThamGia: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    default: []
  }],
  ChungChiDaNhan: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CertReceived',
    default: []
  }]
})

const User = mongoose.model('User', UserSchema)

export default User