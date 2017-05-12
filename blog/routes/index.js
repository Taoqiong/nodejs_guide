var express = require('express');
var router = express.Router();
var querystring = require('querystring');

router.index = function(req,res) {
    res.render('index', { title: 'Express' });
};


router.user = function(req,res) {
    res.render('', { title: 'Express' });
};

router.post = function(req,res) {
    res.render('post', { title: 'Express' });
};

router.reg = function(req,res) {
    res.render('', { title: 'Express' });
};

router.doReg = function(req,res) {
    res.render('', { title: 'Express' });
};

router.login = function(req,res) {
    res.render('login', { title: 'Express' });
};

router.doLogin = function(req,res) {
    res.render('doLogin', { title: 'Express' });
};

router.logout = function(req,res) {
    res.render('logout', { title: 'Express' });
};

module.exports = router;
/*
 // GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// express 路径匹配模式
router.all('/user/:username', function(req,res,next) {
   console.log('1st route');
   next();
});

router.get('/user/:username', function(req,res) {
    res.send('user: ' + req.params.username);
});

router.put('/user/:username', function(req,res) {
    // 修改用户信息
    res.send('Done');
})
// express 正则匹配模式，纯数字
//router.get('\/num\/([1-9][0-9]{0,}){0,1}\/?([^\/]+)\/?',function(req, res) {
router.get('\/num\/([1-9][0-9]{0,}){0,1}\/?\:name\/?',function(req, res) {
//    res.send(querystring.stringify(req));
    res.send(req.params);
});
module.exports = router;
*/
