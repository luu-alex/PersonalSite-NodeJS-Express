var express = require('express');
var app = express();

//requiring routes
var websiteRoutes = require('./routes/website')


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', websiteRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started!');
})