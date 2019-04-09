const request = require("request")
const mysql = require("../connection/mysql")
const cheerio = require("cheerio")
exports.get_all = function (req, res) {
    let sql_department = "SELECT * FROM departments where is_active = 1";
    const departments = mysql.query(sql_department, function (errD, results) {
        results.forEach(function (department, index) {
            let department_id = department.id;
            let sql_course = "SELECT * FROM courses where is_active = 1 AND department_id = " + department_id;
            const courses = mysql.query(sql_course, function (errC, results_c) {
                results_c.forEach(function (course, index) {
                    let total_student = course.total_student;
                    for (let i = 1; i <= total_student; i++) {
                        let code = "0".repeat(5 - i.toString().length) + i;
                        let msv = course.course_code  + department.department_code + code;
                        request.get("http://daotaotn.uneti.edu.vn/XemDiem.aspx?MSSV=" + msv, function (err, httpResponse, body) {
                            let $ = cheerio.load(body)
                            let result = $('table.none-grid').each(function (index, item) {
                                console.log($(item).html());
                            })
                            res.json($('table.none-grid').html())
                            process.exit();
                        })
                    }
                })
            });
        });
    });
}