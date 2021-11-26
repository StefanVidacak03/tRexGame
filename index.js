var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');

app.use('/public', express.static('public'));
app.use('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/views/index.html'));
});
app.listen(port);

console.log('Server started at http://localhost:%s/', port);