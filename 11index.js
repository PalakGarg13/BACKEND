/*Initialize a project with npm
express install

setting up parsers for form
setting up ejs for ejs pages
->install ejs from npm
-> setup ejs as a view engine
setting up public static files

dynamic routing
how to get data coming from frontend at backend route
*/
const express = require('express');
const app = express();
const path = require('path');
//in dono lines se hum form ko use kr paenge -> form ke data ko backend pe handle kr paenge
app.use(express.json());//parsers
app.use(express.urlencoded({extended: true}));//parsers
//is line ki help se hum public images static files ka use kr skte hain
app.use(express.static(path.join(__dirname, 'public'))); //sari static files ko find krne public folder mein jana hai
//isse hum easily render kr skte hain ejs pages ko
app.set('view engine', 'ejs');
app.get('/',function(req,res){
    res.render("index"); //put the name of the file which exist in the view folder
});
app.get("/profile/:username", function(req,res){ //harsh ke aage colon lgane se it becomes variable
    // res.render("profile",{msg: "chl rha hai"});
    res.send(req.params.username); //agr humne jo bhi username dia hai toh iise hum vo print krwa skte hai (jb bhi kisi cheej ke aage : lgate hai toh usse req.params kehte hai)
})
app.get("/author/:username/:age",function(req,res){ //here name and age both are dynamic
    // res.send('chal rha hai');
    // res.send(req.params);
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
});
app.listen(3000, function(){
    console.log("its running");
})





// const path = require('path');
// //both the lines functions in same way
// console.log(path.join(__dirname,'public'));
// console.log(__dirname+'/public');