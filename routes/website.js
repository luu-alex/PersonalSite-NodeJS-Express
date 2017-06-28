var express = require('express');
var router  = express.Router();

router.get('/', function(req, res){
    res.render('index');
});
router.get('/practice', function(req, res){
    res.render('practice');
});
router.get('/experience', function(req, res){
    res.render('practice');
});
router.get('/education', function(req, res){
    res.render('practice');
});
router.get('/blog', function(req, res){
    res.send('blog');
});


module.exports = router;