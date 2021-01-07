const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + 'dist/gameproj'));

app.get('/*', function(req,res){
    // res.type('text/html')
    res.sendfile(path.join(__dirname +
        '../../../dist/gameproj/index.html'),'text/html')})
app.listen(process.env.PORT || 8080)