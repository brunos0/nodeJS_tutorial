const fs = require('fs');

// fs.mkdir('tutorial',(err)=>{
// if(err){
//     console.log(err);
// }
// else {
//     //console.log('folder created successfully created');

//     // delete folder
//     // fs.rmdir('tutorial',(err)=>{
//     //     if(err){
//     //         console.log(err);
//     //     }
//     //     else {
//     //      console.log('Successfully deleted folder');
//     //     }
//     //  } );
//     fs.writeFile('./tutorial/test.txt','data content again',(err)=>{
//              if(err){
//             console.log(err);
//         }
//         else {
//          console.log('Successfully deleted folder');
//         }
//     })
// }
// })

//delete a nom empty folder
// fs.unlink('./tutorial/test.txt', 
// (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         fs.rmdir('tutorial', (err)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log('Deleted folder')
//             }
//         });
//     }
// }
// );

//delete a multiple files folder content
fs.readdir('tutorial',(err, files)=>{
    if(err){
        console.log(err)
    }
    else{
        for(let file of files){
        fs.unlink('./tutorial/' + file, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('Deleted folder')
            }
        })
        }
        //console.log(files);
    }
})