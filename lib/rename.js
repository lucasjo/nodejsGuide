/**
 * Created by kikimans on 2015-05-20.
 */
var fs = require('fs');

fs.rename('./demo.txt', './demo.txt',function(err){
    if(err){
        throw err;
    }
    console.log('파일이 수정되었습니다.');
})