var express = require('express')

var app = express()



app.get('/index2.html', function(req,res){
	res.sendFile('./index2.html', {root: './public'})
})
app.use(express.static('./public'))
//this checks the files in the public file before moving on to the other get requests
//this replaces the folowing three get requests.
//
//
// app.get('/', function(req,res){
// 	res.sendFile('./index.html', {root: './public'})
// })

// // app.get('/main.css', function(req,res){
// 	res.sendFile('./main.css', {root: './public'})
// })

// app.get('/main.js', function(req,res){
// 	res.sendFile('./main.js', {root: './public'})
// })

app.listen(8000)