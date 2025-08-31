/*node js is not a programming language
it is not a technology not a framework
=>It is javascript runtime environment.
ryan dahl ->google chrome ka v8 engine ka code open source hai and ryan dahl us code mein chhedkhaani kr rha hai
fir usne socha ki humein to js mein code krna hai kyonki chrome ka v8 engine c++ mein hai
hum js ka code likhenge jo ki wrapper layer of js receive kregi and vo code
v8 engine ke c++ modules ke saath ek server create krega
v8 ka engine aur uspe js wrapper this whole thing is node js
jb tk node chlega tb tk vo mahol deta hai javascript se server bnane ka that's why it is js runtime env
*/
/*
npm init -> package.json->lekha jokha of the project
*/
const fs = require('fs'); //it means humne fs module ko bahr nikal lia hai node se and apne iss const mein move kr lia hai\
//fs.writeFile(file,data[,options],callback)
// fs.writeFile("hey.txt","hey hello kaise ho", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// });

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })
//fs.copyFile(src,dest[,mode],callback)
// fs.copyFile("hello.txt","./copy/chacha.txt", function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("removed"); //it removes hello.txt
// })

//fs.rmdir(path[,options],callback)
// fs.rmdir("./copy", function(err){
// if(err) console.error(err);
// else console.log("removed");
// })
//removed only empty dir and folders

