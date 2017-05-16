var router = require('express').Router();
var crypto = require('crypto');
var User = require('../models/user');
//var flash = require('connect-flash');

router.get('/', function(req,res,next) {
    console.log("----------------------");
    res.render('index',{title:'首页',layout:'layout'},function(err,html) {
        if(err) {
            console.log(err);
            throw new Error(err);
        }
        else{
            return res.send(html);
        }
    });
});

router.get('/reg', function(req,res) {
    res.render('reg/reg', {title: '注册',layout:'layout'});
});

router.post('/reg', function(req,res) {
    //检验用户两次输入的口令是否一致
    if(req.body['password-repeat'] != req.body['password']){
        req.flash('error',  '两次输入的口令不一致');
        return res.redirect('/reg');
    }
    //生成口令的散列值
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    var newUser = new User({
        name:req.body.username,
        password:password
    });
    User.get(newUser.name, function(err, user) {
        if(user) {
            err = '用户名已存在';
        }
        if(err) {
            req.flash('error',err);
            return res.redirect('/reg');
        }
        //如果不存在则新增用户
        newUser.save(function(err) {
            if(err) {
                req.flash('error',err);
                return res.redirect('/reg');
            }
            req.session.usr = newUser;
            req.flash('success', '注册成功');
            res.redirect('/');
        });
    });
});

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
