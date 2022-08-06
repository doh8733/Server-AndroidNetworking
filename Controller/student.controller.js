const student = require('../model/student.model')

exports.getAllStudent = async (req,res,next)=>{
    const listStudent = await student.find({})
    res.send(listStudent)
}
exports.postAddStudent = async (req,res,next)=>{
    const std= new student(
        {
        maSinhVien : req.body.maSinhVien,
        maLop : req.body.maLop,
        hoTen : req.body.hoTen,
        ngaySinh : req.body.ngaySinh,
        queQuan : req.body.queQuan

    })
    await std.save(function (err){
        if (err){
            res.send(err)
        }
    })
    res.send('them thanh cong'+ req.body.maSinhVien)
}
exports.postEditStudent = async (req,res,next)=>{
    let dieu_kien={
        _id:req.params.id
    }
    let du_lieu = {
        maSinhVien : req.body.maSinhVien,
        maLop : req.body.maLop,
        hoTen : req.body.hoTen,
        ngaySinh : req.body.ngaySinh,
        queQuan : req.body.queQuan
    }
     student.updateOne(dieu_kien,du_lieu,function (err,res){
        if (err){
            res.send(err.message)
        }
    })
    res.send('sua thanh cong'+req.body.maSinhVien)
}
exports.postDeleteStudent = async (req,res,next)=>{
    let dieu_kien = {
        _id: req.params.id
    }
    student.deleteOne(dieu_kien,function (err,res){
        if (err){
            res.send(err.message)
        }
    })
    res.send("xoa thanh cong"+req.body.maSinhVien)
}