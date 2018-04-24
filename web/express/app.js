const express = require('express')
const app = express();
// https://www.youtube.com/watch?v=tAmQZwMXvoE
let isLogin = () => true;

//middlewar
let logger = (req, res, next) => {
	console.log('Peticion de tipo ', req.method);
	next();
}

let showIp = (req, res, next) => {
	console.log('127.0.0.1 ');
	next();
}

app.use((req, res, next) => {
	if (isLogin() ) {
		next();
	}else{
		res.send('You are not login'); 
	}
}, logger, showIp);

//app.use(logger);

app.get('/:user', (req, res) => {
	let usuario = req.params.user;
	res.send(`Welcome ${usuario}`);
});
 
app.post('/', (req, res) => {
  res.send(`Hello World ${req.method}`);
});
 
app.put('/', (req, res) => {
  res.send(`Hello World ${req.method}`);
});
 
app.delete('/', (req, res) => {
  res.send(`Hello World ${req.method}`);
});
       
app.listen(3000, () =>{
  console.log('Hello worl');
});