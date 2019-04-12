const request = require("request");
const constant = require('../utils/constant');
const mysql = require("../connection/mysql");
const cheerio = require("cheerio");
const course = require("../models/Course");

class StudentController {
    constructor() {
    }

    getStudents(req, res) {
        course.findAll(function (errD, results) {
            results.forEach(function (course, index) {
                let qs = {
                    course_code: course.code,
                    total_student: 10
                };
                console.log(constant.api_url.crawl_student_course);
                request.get({url: constant.api_url.crawl_student_course, qs: qs}, function (err, result) {
                    console.log(result);
                });
            });
        });
    }

    getSchedules(req, res) {
        let sql_course = "SELECT * FROM courses where is_active = 1";
        mysql.query(sql_course, function (errD, results) {
            results.forEach(function (course, index) {
                let course_id = course.id;
                request.get(constant.api_url.crawl_schedule_course + course_id, function (err, result) {
                    console.log(result);
                });
            });
        });
    }

    getScheduleExams(req, res) {
        let sql_course = "SELECT * FROM courses where is_active = 1";
        mysql.query(sql_course, function (errD, results) {
            results.forEach(function (course, index) {
                let course_id = course.id;
                request.get(constant.api_url.crawl_schedule_exam_course + course_id, function (err, result) {
                    console.log(result);
                });
            });
        });
    }
}

module.exports = StudentController;


