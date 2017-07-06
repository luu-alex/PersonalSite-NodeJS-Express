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
router.get('/evermight', function(req, res){
    res.render('designone.ejs')
})

router.get('/nav', function(req,res){
    res.render('nav.ejs')
})
router.get('/v2', function(req, res){
    res.render('v2.ejs');
})
module.exports = router;

router.get('/slash', function(req, res){
    res.render('slashworkers');
})