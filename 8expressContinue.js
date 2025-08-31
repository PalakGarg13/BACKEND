//Middleware is that ki jb hum koi bhi kaam krwana chahte hai route run krne se pehle so we use it like to print anything etc.
/*jb bhi server req accept krta hai waha se route ke beech pahunchne 
tak agar aap us req ko beech mein rokte ho and kuch perform krte ho
toh yeh element middleware kehlata hai
*/

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('middleware chalao');
    next();
});
app.use(function(req,res,next){
    console.log('middleware chala ek aur baar');
    next();
});

app.get("/", function(req,res){
    res.send("champion mera anuj");
});
app.get("/about", function(req,res){
    res.send("about page hai yeh");
});
app.listen(3000);

//sbse pehle browser ne / ki req server pe bheji then server ne uss req ko accept kia
//then vo req middleware ke pass gyi aur usne middleware chalo print krdia and after printing next() function
//se vo req aage router ke pass forward hogi and now the router is in use state

//frontend backend frontend
//browser-> server->middleware->next()->router->is in use state