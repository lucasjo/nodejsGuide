/**
 * Created by kikimans on 2015-05-20.
 */
var fs = require('fs');

fs.watchFile('./eample.txt',{
    presistent:true,
    interval : 0
}, function(curr, prev){
    console.log(curr);
    console.log(' 현재 파일의 수정 시간 : ' + curr.mtime);
    console.log(' 이전 파일의 수정 시간 : ' + prev.mtime);
})