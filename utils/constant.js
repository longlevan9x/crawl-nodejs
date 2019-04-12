const config = require("../config")
const api_url = {
    crawl_student_course: config.API_URL + "crawl/student/course",
    crawl_schedule_course: config.API_URL + "crawl/schedule/course",
    crawl_schedule_exam_course: config.API_URL + "crawl/schedule-exam/course",
};

module.exports = {
    api_url: api_url
}