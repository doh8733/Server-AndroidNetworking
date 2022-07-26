var express = require('express');
var router = express.Router();

const classroomControler = require('../Controller/Classrom.Controller')
const studentController = require('../Controller/student.controller')
const {response} = require("express");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/classroom',classroomControler.getAllClass)
router.get('/get-all-student',studentController.getAllStudent)
router.post("/add-newClass",classroomControler.postAddClassroom)
router.post('/edit-Class/:id',classroomControler.postEditClassroom)
router.post('/delete-Class/:id',classroomControler.postDeleteClass)
router.post("/add-newStudent",studentController.postAddStudent)
router.post('/edit-student/:id',studentController.postEditStudent)
router.post('/delete-student/:id',studentController.postDeleteStudent)

module.exports = router;
