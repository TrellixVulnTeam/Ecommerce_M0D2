const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    default: ''
  },
  mobile: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  role: {
    type: Number,
    default: 0
  },
  cart: {
    type: Array,
    default: []
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Users', userSchema)

