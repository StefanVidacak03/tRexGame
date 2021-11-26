var express = require('express'),
    app = express(),
    port = process.env.PORT || 3200;
    


app.use( express.static('public'));

app.use('/', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});


app.listen(port);

console.log('Server started at http://localhost:%s/', port);