const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://doh8733:huy123456@cluster0.do5qh.mongodb.net/networking')
const  userSchema = new mongoose.Schema(
    {
        tenLop : String,
        maLop: String
    }
)
const Class = mongoose.model('classroom',userSchema)
module.exports = Class