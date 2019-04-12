const env = "dev";

let API_BASE_URL = "";
let MYSQL_CONFIG = {};

switch (env) {
    case "dev":
        API_BASE_URL = "http://localhost/tracuuthongtin-php/api/";
        MYSQL_CONFIG = {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'lookup_student',
        };
        break;
    case "prod":
        API_BASE_URL = "http://lookupstudent.pikalong.top/api/";
        MYSQL_CONFIG = {
            host: '',
            user: '',
            password: '',
            database: '',
        };
        break;
}


const API_VERSION = 'v1/';
const API_URL = API_BASE_URL + API_VERSION;

module.exports = {
    MYSQL_CONFIG: MYSQL_CONFIG,
    API_URL: API_URL
};
