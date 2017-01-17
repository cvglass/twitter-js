// load routers
const routes = require('./routes/');
const express = require('express');
const app = express();


// set templating engine
const nunjucks = require('nunjucks');
app.set('view engine', 'html'); //allows the app (res.render) to work with html
app.engine('html', nunjucks.render); //instead of default res.render - use nunjucks.render in its place
nunjucks.configure('views', {noCache: true});


// start app - listen on port
app.listen(3000, ()=>{
	console.log('server listening')
});

// handlers
app.use((req, res, next)=>{
	console.log(req.method, req.path);
	next();
});

// route home
app.use('/', routes);

// app.get('/', (req, res) =>{
// 	res.render('index', {title : "An example", people : people})
// });

// // route special
// app.all('/special*', (req, res, next)=>{
// 	console.log("you reached the special area");
// 	next();
// });

// app.get('/special', (req, res) =>{
// 	res.send("you reached the special area twice");

// });

// // route news
// app.get('/news', (req, res)=>{
// 	res.send('this is the news')
// });