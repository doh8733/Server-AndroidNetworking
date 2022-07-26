const classM = require('../model/classroom.model')

exports.getAllClass = async (req,res,next)=>{
    const listClass = await classM.find({})
    res.send(listClass)
}

exports.postAddClassroom = async (req,res,next) =>{
    const classRoom = new classM({
        maLop : req.body.maLop,
        tenLop: req.body.tenLop
    })
    await classRoom.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send('Thêm thành công');
    });
}
exports.postEditClassroom = async (req,res,next)=>{
    let dieu_kien={
        _id:req.params.id
    }
    let du_lieu={
        maLop:req.body.maLop,
        tenLop:req.body.tenLop
    }
    classM.updateOne(dieu_kien,du_lieu,function (err,res) {
        if (err){
            res.send("loi"+err.message)
        }
    })
    res.send("thanh cong")
}
exports.postDeleteClass = async (req,res,next)=>{
    let dieu_kien ={
        _id: req.params.id
    }
    classM.deleteOne(dieu_kien,function (err){
        if (err){
            console.log(err)
        }else res.send("xoa thanh cong")
    })
}