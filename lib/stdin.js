/**
 * Created by kikimans on 2015. 5. 20..
 */
process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(chunk){
    process.stdout.write('data : ' + chunk);
});

process.stdin.on('end', function(){
    process.stdout.write('end');
});

