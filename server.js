var express = require('express')

var app = express()


app.use(express.static('./public'))
//this checks the files in the public file before moving on to the other get requests
//this replaces the folowing three get requests.
//
//
app.get('/denver', function(req,res){
	res.sendFile('./index.html', {root: './public'})
})

app.get('/limon_colorado', function(req,res){
	res.sendFile('./index2.html', {root: './public'})
})

app.get('/colby_kansas', function(req,res){
	res.sendFile('./index3.html', {root: './public'})
})

app.get('/hays_kansas', function(req,res){
	res.sendFile('./index4.html', {root: './public'})
})

app.get('/topeka_kansas', function(req,res){
	res.sendFile('./index5.html', {root: './public'})
})
// // app.get('/main.css', function(req,res){
// 	res.sendFile('./main.css', {root: './public'})
// })

// app.get('/main.js', function(req,res){
// 	res.sendFile('./main.js', {root: './public'})
// })

app.listen(8000)