const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://doh8733:huy123456@cluster0.do5qh.mongodb.net/networking')
const studentSchemal = new mongoose.Schema(
    {
        maSinhVien : String,
        maLop: String,
        hoTen : String,
        ngaySinh : String,
        queQuan : String

    }
)
const student = mongoose.model('student',studentSchemal)
module.exports = student