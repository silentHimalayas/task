var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/task');
var infoSchema = new mongoose.Schema({
  name: String,
  age: Number,
  tel: Number,
  pmb: String,
  status: String,
  area: String
})

var userSchema = new mongoose.Schema({
  account: String,
  pwd: String,
})
var Models = {
  info: mongoose.model('info',infoSchema),
  user: mongoose.model('user',userSchema)
}
module.exports = Models
