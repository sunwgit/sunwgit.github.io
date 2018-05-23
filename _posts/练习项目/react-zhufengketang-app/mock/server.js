let express = require('express');
let bodyParser = require('body-parser');
let expressSession = require('express-session');
let app = express();

app.listen(3000);
app.use(bodyParser.json());
app.use(
    expressSession({
        resave: true,
        secret: 'zfpx', //签名  安全性
        saveUninitialized: true
    })
);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header(
        'Access-Control-Allow-Methods',
        'PUT, GET, POST, DELETE, OPTIONS'
    );
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
let sliders = require('./sliders');
app.get('/slider', function(req, res) {
    res.json(sliders);
});
let lessones = require('./lessons');
let len = lessones.length;
app.get('/list', function(req, res) {
    let { offset, limit, type } = req.query;
    offset = ~~offset;
    limit = ~~limit;
    type = ~~type;
    switch (type) {
        case 0:
            return res.json({
                lists: lessones.slice(offset, offset + limit),
                hasMore: offset + limit > lessones.length ? false : true
            });
        case 1:
            let reacts = lessones
                .filter(item => item.type === 'react')
                .slice(offset, offset + limit);
            return res.json({
                lists: reacts,
                hasMore: offset + limit > reacts.length ? false : true
            });
        case 2:
            let vues = lessones
                .filter(item => item.type === 'vue')
                .slice(offset, offset + limit);
            return res.json({
                lists: vues,
                hasMore: offset + limit > vues.length ? false : true
            });
    }
});
let userList = [];
//登录
app.post('/login', function(req, res) {
    let { username, password } = req.body;
    let isChecked = userList.find(
        user => user.username === username && user.password === password
    );
    if (isChecked) {
        req.session.user = username;
        res.json({ error: 0, msg: '登录成功', user: username });
    } else {
        res.json({ error: 1, msg: '用户名密码不匹配' });
    }
});
//注册
app.post('/reg', function(req, res) {
    let { username, password } = req.body;
    let isChecked = userList.find(user => user.username === username);
    if (isChecked) {
        res.json({ error: 1, msg: '用户名已被注册' });
    } else {
        userList.push(req.body);
        res.json({ error: 0, msg: '注册成功' });
    }
});
app.get('/validate', (req, res) => {
    if (req.session.user) {
        res.json({ msg: '', error: 0, user: req.session.user });
    } else {
        res.json({ msg: '', error: 0, user: null });
    }
});
