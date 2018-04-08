const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  name: String,
  todo:[{ type: mongoose.Schema.Types.ObjectId, ref: 'todo' }],
  username: String,
  password: String
},{
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user;
