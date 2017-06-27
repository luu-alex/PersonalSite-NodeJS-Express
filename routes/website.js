var express = require('express');
var router  = express.Router();

router.get('/', function(req, res){
    res.render('index');
});
router.get('/practice', function(req, res){
    res.render('practice');
});


module.exports = router;