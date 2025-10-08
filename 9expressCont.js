//Error Handling
const express = require('express');
const app = express();
app.get("/", function(req,res){
    res.send("champion mera anuj");
});
app.get("/about", function(req,res){
    res.send("about page hai yeh");
});
app.get("/profile", function(req,res,next){
    return next(new Error("something went wrong"));
})

app.use((err,req,res,next)=>{
console.log(err.stack)
res.status(500).send('Something broke!');
})

// This is an error-handling middleware in Express.

// Signature: (err, req, res, next) → It must have 4 arguments for Express to recognize it as an error handler.

// Steps:

// console.log(err.stack) → Logs the error stack trace in the console for debugging.

// res.status(500).send('Something broke!');->Sends a 500 Internal Server Error response to the client with the message 'Something broke!'.

// This middleware will run only when next(err) is called or an error occurs.

app.listen(3000);
// This will start the server on port 3000.



