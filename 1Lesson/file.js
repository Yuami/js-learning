const fs = require('fs');


fs.writeFile('.textp.txt',"esto es un archivo de texto",function(err){
    if(err){ console.log(err);
    }
    console.log('Archivo creado!');
});

fs.readFile('./textp.txt',function (err,data){
    if(err){
        console.log(err);
    }else {console.log(data.toString());}
});

