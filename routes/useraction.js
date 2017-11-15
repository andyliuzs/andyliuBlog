var User = require('../models/user');
var stringUtil = require('../utils/StringUtil')

/***
 * 登录
 * @param req
 * @param res
 */
exports.doLogin = function (req, res) {
    let _username = req.body.username;
    let _password = req.body.password;
    console.log("dologin username=" + _username + ",password=" + _password)
    res.setHeader("Access-Control-Allow-Origin", "*");
    User.findOne({username: _username}, (err, user) => {
        console.log("find user =" + user)
        if (user == null) {
            User.findOne({email: _username}, (err, user) => {
                if (user == null) {
                    // res.render('login', {
                    //     title: "Lose Weight",
                    //     result: false,
                    //     msg: '用户不存在'
                    // });
                    res.send({
                        result: false,
                        msg: '用户不存在！'
                    })
                } else {
                    if (user.password !== _password) {
                        // res.render('login', {
                        //     title: "Lose Weight",
                        //     title: '登录',
                        //     error: '密码错误！'
                        // });
                        res.send({
                            result: false,
                            msg: '密码错误！'
                        });
                    } else {
                        req.session.user = user;
                        console.log("登录成功 by email！")
                        res.send({
                            result: true,
                            msg: '登录成功！'
                        });
                    }
                }
            });
        } else {
            if (user.password !== _password) {
                // res.render('login', {
                //     title: "Lose Weight",
                //     title: '登录',
                //     error: '密码错误！'
                // });
                res.send({
                    result: false,
                    msg: '密码错误！'
                });
            } else {
                console.log("登录成功 by username！")
                req.session.user = user;
                res.send({
                    result: true,
                    msg: '登录成功！'
                });
            }
        }
    });
}

/***
 * 注册用户
 * @param req
 * @param res
 */
exports.register = function (req, res) {
    let _username = req.body.username;
    let _email = req.body.email;
    let _phone = req.body.phone;
    let _password1 = req.body.password1;
    let _password2 = req.body.password2;
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (stringUtil.isEmpty(_username)) {
        res.send(
            {
                result: false,
                msg: "用户名不能为空",
            }
        );
        return;
    }

    if (stringUtil.isEmpty(_password1)) {
        res.send(
            {
                result: false,
                msg: "密码不能为空",
            }
        );
        return;
    }

    if (stringUtil.isEmpty(_password2)) {
        res.send(
            {
                result: false,
                msg: "确认密码不能为空",
            }
        );
        return;
    }

    if (_password1 !== _password2) {
        res.send(
            {
                result: false,
                msg: "两次输入密码不一致！",
            }
        );
        return;
    }
    User.findOne({username: _username}, (err, user) => {
        if (user != null) {
            res.send(
                {
                    result: false,
                    msg: "本账号已存在！",
                }
            );
        } else {
            var newUser = new User({
                username: _username,
                password: _password1,
                sex: '',
                icon: '',
                qq: '',
                wechat: '',
                nickname: _username,
                phone: _phone,
                email: _email,
                desc: ''
            });
            newUser.save();
            console.log('注册成功!');
            res.send(
                {
                    result: true,
                    msg: "注册成功！",
                }
            );
        }
    });

}
