/**
 * Created by kikimans on 2015. 5. 20..
 */
process.on('uncaughtException', function(err){
    console.log('예외 : ' + err);

});

setTimeout(function(){
    console.log('이 코드는 실행됩니다.');

}, 500);

nonExistentFunction();

console.log(' 이 코드는 실행 되지 않습니다.');