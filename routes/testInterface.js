var stringUtil = require('../utils/StringUtil')

exports.getServerTimeByTag = function (req, res) {
    let _tag = req.body.tag;
    console.log("getServerTime tag=" + _tag);
    res.setHeader("Access-Control-Allow-Origin", "*");
    new Promise((resolve,reject)=>{
            if(stringUtil.isEmpty(_tag)){
                reject('');
            }
            resolve(new Date().getTime()+"");
    }).then(function (result) {
        if(stringUtil.isEmpty(result)){
            res.send({
                result: false,
                msg: 'get time empty'
            });
        }else{
            res.send({
                result: true,
                time: result,
            });

        }
    }).catch(function (reason) {
        res.send({
            result: false,
            msg: 'server error'
        });
        console.error("seerver error "+reason);
    });
}

exports.getServerTime = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    new Promise((resolve,reject)=>{
        resolve(new Date().getTime()+"");
    }).then(function (result) {
        if(stringUtil.isEmpty(result)){
            res.send({
                result: false,
                msg: 'get date error'
            });
        }else{
            res.send({
                result: true,
                time: result,
            });

        }
    }).catch(function (reason) {
        res.send({
            result: false,
            msg: 'server error'
        });
        console.error("seerver error "+reason);
    });
}