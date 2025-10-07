//mongo installation
//mongodb connection
//schema
//Model
//crud
//npm i mongoose - helps in conversation be node server and mongodb server
//ORM - Object Relational Mapping
//ODM - Object Document Mapping


const express = require('express');
const app = express();
const userModel = require('./15usermodel');
app.get('/',(req,res)=>{
res.send("hey");
})
app.get('/create',async (req,res)=>{
// userModel.create({ //yeh asynchronous code hai toh yeh baadmein chlega
//     name: "Palak",
//     username : "Palak",
//     email : "palak11@gmail.com"
// })
// console.log("hey"); //it is synchronous toh yeh pehle chlega

//bt if we want ki async wala pehle chle toh we did
let createduser = await userModel.create({ //if we use await then it is imp to write async in parent function
    name:"Palak",
    username : "palak",
    email : "palak11@gmail.com"
})
res.send(createduser);
})

app.get('/update', async (req,res)=>{
// userModel.findOneAndUpdate(findone,update, {new: true}) //syntax
let updateduser =  await userModel.findOneAndUpdate({username:"Palak"}, {name : "Palak garg"},{new: true})
res.send(updateduser);
})


// app.get('/',(req,res)=>{
// res.send("hey");
// })
app.listen(3000);
//this is how u connect node server with mongodb server

