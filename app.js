const express = require('express');
const mongoose = require('mongoose');
const app = express();
// ✅ Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/testdb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("DB connection error:", err));
//Import model
const userModel = require('./15usermodel');
//userModel name ke constant mein Model aa chuka hai
app.get('/', (req, res) => {
    res.send("hey");
});

// app.get('/', (req,res)=>{
//     res.send("hey");
// })
app.get('/create', async (req,res) => { //yeh asynchronous hai toh yeh baadmein chlega(before apply async)
    let createduser =  await userModel.create({ //if we want ki yeh code pehle chle toh hum ismein await lga denge aur iske parent function pe async lga denge
        name : "Palak",
        email : "palak@gmail.com",
        username : "Palak"
    });
    // console.log("hey");//yeh synchronous code hai toh yeh pehle chlega(before apply sync)
res.send(createduser); 
console.log("hey"); //yeh ab baadmein chlega becoz we apply aync
});

app.get('/update', async (req,res) => {
  let updateduser = await userModel.findOneAndUpdate(
    {username : "Palak"},
    {name: "Palak garg"},
    {new:true}
);
  res.send(updateduser);
});

app.get("/read", async (req,res) => { 
    let readUser = await userModel.find();
    //agr hum find use krenge  toh if ek bhi user na ho toh bhi yeh humein blank array dega and 
    //if we use findOne this gives us blank screen
    //find gives array and findOne gives object
    //agr same username se do bnde hai toh findOne aapko pejla bnda find krke dega
    res.send(readUser);
});

app.get("/delete", async (req,res) => {
    let deleteUser = await userModel.findOneAndDelete({name:"Palak garg"});
    res.send(deleteUser);
});
//humne Palak garg ko delete krdia hai and then after this jb hum firse read pe jaenge toh humein only Palak visible hoga

app.listen(3000);
//mongoose ke related koi bhi code sare asynchronous honge
