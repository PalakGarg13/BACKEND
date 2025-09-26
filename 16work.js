const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render("index1");
})
app.get('/read',async (req,res)=>{
  let users = await userModel.find();
    res.render("read", {users}); //for this we have to create read.ejs in views folder
})
app.get('/delete/:id',async (req,res)=>{
  let users = await userModel.findOneAndDelete({_id: req.params.id});
    res.redirect("/read");
})
app.post('/create', async (req,res)=>{ //for this we create a model folder and place user.js in it
    let {name,email,image} = req.body;
   let createdUser =  await userModel.create({
    name,
    email,
    image
}); 
res.redirect("/read"); //iisse hum direct read page pe pahunch jaege
// res.send(createdUser);
});

app.listen(3000);
//jb humne yha pe render lga dia toh yeh index1 page ke through output dega
//15usermodel and app.js mein jo kaam kia tha aaj vhi kaam app mein krenge