/**
 * Created by kikimans on 2015. 5. 20..
 * 파일 읽기
 */
var fs = require('fs');

fs.readFile('./test.txt','utf-8', function(err, data){
    if(err){
        throw err;
    }
    console.log(data);
});

console.log(' 파일 내용 : ');