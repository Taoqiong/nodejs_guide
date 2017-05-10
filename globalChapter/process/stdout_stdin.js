//console.log("here is console log-------------------\n");
//process.stdout.write('here is process.stdout.write ----------------------\n');

// 恢复流？
//process.stdin.resume();

/*process.stdin.on('data',function(data) {
    process.stdout.write('read from console: ' + data.toString());
});*/


// ()=>{} es6语法-> function(){}
/*process.stdin.on('data',(data) => {
    process.stdout.write('read from console: ' + data.toString());
});*/

process.stdin.setEncoding('utf8');

process.stdin.on('readable',()=>{
    var chunk = process.stdin.read();
    if(chunk !== null){
        process.stdout.write(`data:${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('end');
});
