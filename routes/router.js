var express = require('express');
var router = express.Router();

const StudentController = require("../controllers/StudentController")
const studentController = new StudentController()

/* GET home page. */
router.get('/student/get_all', studentController.getStudents);

module.exports = router;
