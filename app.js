var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function(req, res){
    res.render('index');
});
app.get('/practice', function(req, res){
    res.render('practice');
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started!');
})