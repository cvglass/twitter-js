const express = require('express');
const app = express();


app.listen(3000, ()=>{
	console.log('server listening')
});

app.use((req, res, next)=>{
	console.log(req.method, req.path);
	next();
});

app.all('/special*', (req, res, next)=>{
	console.log("you reached the special area");
	next();
});

app.get('/special', (req, res) =>{
	res.send("you reached the special area twice");

});

app.get('/', (req, res) =>{
	res.send('got it!')
});

app.get('/news', (req, res)=>{
	res.send('this is the news')
});