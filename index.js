var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views"+ "/"+"index.html");
   })

   const path = require('path')
app.use('/static', express.static(path.join(__dirname, '/public' +'/'+'css'+'styles.css')))

app.listen(3000)