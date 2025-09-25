const express = require('express');
const app = express();
const path = require('path');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render("index1");
})
app.get('/read',(req,res)=>{
    res.render("read"); //for this we have to create read.ejs in views folder
})


app.listen(3000);
//jb humne yha pe render lga dia toh yeh index1 page ke through output dega
//15usermodel and app.js mein jo kaam kia tha aaj vhi kaam app mein krenge