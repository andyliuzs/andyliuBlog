/**
 *路由
 *
 */

var express = require('express');
var router = express.Router();

var userAction = require('./useraction');

var testAction = require('./testInterface');

/**
 * welcome
 */
router.get('/', function (req, res, next) {
    res.render('welcome', {title: 'Lose Weight'});
});

router.post('/dologin', userAction.doLogin);
router.post('/doregister', userAction.register);
router.get('/time', testAction.getServerTime);
router.post('/timetag', testAction.getServerTimeByTag);
module.exports = router;