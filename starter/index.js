const fs = require('fs');
const http = require('http');
const url = require('url');

//blocking synchronus way
//const textIn = fs.readFileSync('./txt/./input.txt', 'utf-8') ;
//console.log(textIn);

//const textOut = `This is wha we know about the avocado : ${textIn}.\n Created on ${Date.now()}`
//fs.writeFileSync('./txt/./output.txt', textOut);
//console.log("File written!"); 


//non-blocking asynchronus way
//fs.readFile('./txt/./startttttttt.txt', 'utf-8', (err, data1)=>{
// if(err) return console.log('ERROR!!!!');
//    fs.readFile(`./txt/${data1}.txt` , 'utf-8' ,(err,data2)=>{
//     console.log(data2);
//      fs.readFile(`./txt/$append.txt` , 'utf-8' ,(err,data3)=>{
//       console.log(data3);

//        fs.writeFile(`./txt/$final.txt`, `${data2}\n${data3}`, 'utf-8' ,err =>{
//          console.log("YOUR FILE IS WRIITEN");
//       });
//     });
//   });
//});

const data = fs.readFileSync('./dev-data/data.json', 'utf-8' );
const dataObj = JSON.parse (data);
   
const server = http.createServer((req,res)=>{
   const pathName = req.url;

   if(pathName === '/' || pathName === '/overview'){
    res.end(" THIS IS THE OVERVIEW");
   }
   else if(pathName === "/product"){
    res.end("THIS IS THE PRODUCT");
   }
   else if(pathName === "/api"){
    res.writeHead(200, {'content-type':'application/json'})
    res.end(data);
   }
   else{ 
    res.writeHead(404);
    res.end('<h1>PAGE NOT FOUND!!!<h1>');
   }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log("LISTENING TO THE PORT 8000")
})
