const express = require('express');

const path = require('path');

const PORT = process.env.PORT || 5000

var app = express();



app.use(express.static(path.join(__dirname, 'public')))

//app.set('views', path.join(__dirname, 'views'))

//app.set('view engine', 'ejs')

//app.get('/', (req, res) => res.render('pages/index'))



app.use('/' , function(req,res,next){

   console.log(req.method, 'request:', req.url, JSON.stringify(req.body));

   next();

})





app.get('/',function(req,res,next){

  console.log("im showing calculator")

  res.sendFile(__dirname + "/public/calculator.html");

})



app.post('/' , function(req,res,next) {

  console.log("posted");

})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
