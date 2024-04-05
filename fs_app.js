const fs = require('fs');

//create a file
// fs.writeFile('file.txt','data content', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('File successfully created');
//         fs.readFile('file.txt','utf8',(err, file)=>{
//             if(err){
//                 console.log(err);
//             } else {    
//                 console.log(file);
//             }            
//         }
//         );
//     }
// });

//rename file
// fs.rename('file.txt','arquivo.txt', (err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfulyy renamed the file');
//     }
// });

//append content to file
// fs.appendFile('arquivo.txt','\nthird data appended',(err)=>{
//         if(err){
//             console.log(err);
//         } else {
//             console.log('Successfully appended data to the file');
//         } });
//delete file
fs.unlink('arquivo.txt',(err)=>{
            if(err){
            console.log(err);
        } else {
            console.log('Successfully appended data to the file');
        } });
