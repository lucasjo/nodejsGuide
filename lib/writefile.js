/**
 * Created by kikimans on 2015-05-20.
 */
var fs = require('fs');

fs.writeFile('./eample.txt', 'hello world11.txt', encoding='utf-8', function(err){
    if(err) throw err;
    console.log('파일이 작성되었습니다');
})