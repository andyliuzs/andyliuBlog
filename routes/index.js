/**
 *路由
 *
 */

var express = require('express');
var router = express.Router();

var userAction=require('./useraction');

/**
 * welcome
 */
router.get('/', function(req, res, next) {
    res.render('welcome', { title: 'Lose Weight' });
});

router.post('/dologin',userAction.doLogin);
router.post('/doregister',userAction.register)
module.exports = router;