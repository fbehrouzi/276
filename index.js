// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000
// var app = express();
//
// app.use(express.static(path.join(__dirname, 'public')))
// //app.set('views', path.join(__dirname, 'views'))
// //app.set('view engine', 'ejs')
// //app.get('/', (req, res) => res.render('pages/index'))
//
// app.use('/' , function(req,res,next){
//    console.log(req.method, 'request:', req.url, JSON.stringify(req.body));
//    next();
// // })
// // app.get('/',function(req,res,next){
// //   console.log("im showing calculator")
// //   res.sendFile(__dirname + "/public/calculator.html");
// // })
//
// app.get('/',function(req,res,next){
//   console.log("im showing tokimon")
//   res.sendFile(__dirname + "/public/tokimon.html");
// })
//
// app.post('/' , function(req,res,next) {
//   console.log("posted");
// })
// app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
// // ______________________________________________________________________________________prof code below here
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
var app = express();

const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.render('pages/index')});
app.get('/hello', (req,res) => { res.render('pages/hello')});
app.get('/users', (req,res) => {
  var getUsersQuery = `SELECT * FROM userstab`;
  console.log(getUsersQuery);
  pool.query(getUsersQuery, (error, result) => {
    if (error)
      res.end(error);
    var results = {'rows': result.rows };
    console.log(results);
    res.render('pages/users', results)
  });
});
app.get('/users/:id', (req,res) => {
  console.log(req.params.id);
  var userIDQuery = `SELECT * FROM userstab WHERE uid=${req.params.id}`;
});
app.post('/login', (req, res) => {
  //console.log('post');
  var username = req.body.user;
  var password = req.body.pwd;
  res.send(`Hello, ${username}.  You have password ${password}`);
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
