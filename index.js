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

const bodyParser = require('body-parser')
// const app = express()
const db = require('./queries')
// const port = 300

// var pool;
// pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });
var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: 'darth9410',
  port: 5432
});

// var tokimon_pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'tokimon_table',
//   password: 'darth9410',
//   port: 5432
// });
var tokimon_pool = new Pool({
  user: 'vzkbmdvilkhmno',
  host: 'ec2-54-83-55-122.compute-1.amazonaws.com',
  database: 'd3rrhc5g9s6859',
  password: '4fd02600d79fe28d3ac84bd21dfb51882cd9750d68ceb749acf96275b2fc75e9',
  port: 5432
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {res.render('pages/index')});
// my code
// app.get('/tokimon', (req,res) => { res.render('pages/tokimon')});
// my code ends
app.get('/hello', (req,res) => { res.render('pages/hello')});
app.get('/tokimon', (req,res) => {
  // console.log('hi');
  var getTokimonQuery = `SELECT * FROM tokimon_table`;
  console.log(getTokimonQuery);
  tokimon_pool.query(getTokimonQuery, (error, result) => {
    if (error)
      res.end(error);
    var results = {'rows': result.rows };
    console.log(results);
    res.render('pages/tokimon', results)
  });
});
app.get('/users', (req,res) => {
  // console.log('hi');
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
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/tokimon', db.getUsers)
app.get('/tokimon/:id', db.getUserById)
app.get('/tokimon/:id', (req,res) => {
  console.log(req.params.id);
  var userIDQuery = `SELECT * FROM tokimon_table WHERE uid=${req.params.id}`;
});
app.get('/users/:id', (req,res) => {
  console.log(req.params.id);
  var userIDQuery = `SELECT * FROM userstab WHERE uid=${req.params.id}`;
});

// app.post('/tokimon', db.createUser)

app.post('/login', (req, res) => {
  //console.log('post');
  var username = req.body.user;
  var password = req.body.pwd;
  res.send(`Hello, ${username}.  You have password ${password}`);
});

// app.put('/tokimon/:id', db.updateUser)
// app.delete('/tokimon/:id', db.deleteUser)
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
