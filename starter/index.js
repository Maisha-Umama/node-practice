const fs = require('fs');

//blocking synchronus way
//const textIn = fs.readFileSync('./txt/./input.txt', 'utf-8') ;
//console.log(textIn);

//const textOut = `This is wha we know about the avocado : ${textIn}.\n Created on ${Date.now()}`
//fs.writeFileSync('./txt/./output.txt', textOut);
//console.log("File written!"); 


//non-blocking asynchronus way
fs.readFile('./txt/./startttttttt.txt', 'utf-8', (err, data1)=>{
 if(err) return console.log('ERROR!!!!');
    fs.readFile(`./txt/${data1}.txt` , 'utf-8' ,(err,data2)=>{
     console.log(data2);
     fs.readFile(`./txt/$append.txt` , 'utf-8' ,(err,data3)=>{
      console.log(data3);

      fs.writeFile(`./txt/$final.txt`, `${data2}\n${data3}`, 'utf-8' ,err =>{
        console.log("YOUR FILE IS WRIITEN");
           });
        });
     });
});
