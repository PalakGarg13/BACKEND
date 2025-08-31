//form handling and working with forms
/*in this video we learn to handle backend process of forms and making sure the data is coming
from any frontend library,framework,templating engines, we still handle it at the backend.
*/
//npm i cookie-parser
/*hum log kuch bhi data fronted par browser par rakh skte hai 
and jab bhi aap kuch bhi request backend pr kroge vo frontend pr saved data automatically backend
par chla jaega
*/
const express = require('express');
const app = express();
app.use(express.json());//yeh line aapke jsone based data ko readable krti hai
app.use(express.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.send("eggrfhedji")
})
app.get("/profile",function(req,res,next){
return next(new Error("invalid"));
});

/*tumne toh bheja tha plain text par server ko mila blob which is not directly
readable -> ab is cheej ko handle karna padega ki hum us blob ko waapas se readable 
kar sake */

//blob term is just for example