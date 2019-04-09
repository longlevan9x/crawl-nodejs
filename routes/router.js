var express = require('express');
var router = express.Router();

const student_controller = require("../controllers/student_controller")

/* GET home page. */
router.get('/student/get_all', student_controller.get_all);

module.exports = router;
