const express = require('express');
const app = express();
const home = express();

app.get('/', function(req, res) {
    res.send('hello world')
})

home.get('/', function(req, res) {
    res.send('this my home!');
})

app.use('/app');
home.use(['/home', '/page'], app);

app.listen(3000);