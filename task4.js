var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function callback(err,list){
    if(err) console.log(err);
    const filterList = list.filter(item => path.extname(item) === process.argv[3]);
    for(let i=0;i<filterList.length;i++){
        console.log(fileList[i]);
    }
});

