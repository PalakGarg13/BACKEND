//MERN STACK -> MongoDB Express React Node 
/*
express js ek npm package hai

it is a framework 

framework -> yeh aapko btata hai konsi cheej kesi hai aur vo kese krni hai
basically it gives us a flow to do some work and it is imp to follow this flow

express js manages everything from receiving the request and giving the response

*/
//Setting up a basic express application

const express = require('express') //express package ki sare cheejen is const express mein aa chuki hain
const app = express(); //it runs all the things that are in express package and store it in const app
// route create karna hai
app.get(route,requestHandler) //requestHandler is generally a middleware 
app.get('/', function(req,res){
    res.send('palak chitkara')
})
app.get('/profile',function(req,res){
    res.send("champion mera anuj");
})
//start a server
app.listen(3000)

//sheriyans.com/profile -> here sheriyans.com is a domain and rest part /profile is called as route

//npm i nodemon -g(global)
//nodemon filename.js 
//-> if error then run this command -> npx nodemon filename.js
//in commandsse server apne aap start and restart ho jata hai changes krne pe
//starting se apne aap bar bar server chlane ki need nhi hai


