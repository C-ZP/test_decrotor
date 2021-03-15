const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(function(req, res, next) {
    // 允许请求的源
    res.setHeader('Access-Control-Allow-Origin', "*")
        // 允许请求的方法
    res.setHeader("Access-Control-Allow-Methods", "*")
        // 允许所有的头
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/newslist', (req, res) => {

    console.log(req.query);

    let list = [{
            name: "李四"
        },
        {
            name: "王武"
        }
    ]

    res.send({
        msg: "获取list成功",
        list
    })
})

app.post('/login', (req, res) => {

    console.log(req.body);

    res.send({
        msg: "请求登陆成功",
        username: req.body.username,
        password: req.body.password
    })
})


app.listen(5000, () => {
    console.log('server is running at http://localhost:5000 .... ');
})