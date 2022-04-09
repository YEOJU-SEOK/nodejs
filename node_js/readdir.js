// 파일 목록알아내기
var testFloder =  './data';
var fs = require('fs');

fs.readdir(testFloder, function (error, filelist) {
    console.log(filelist);
})