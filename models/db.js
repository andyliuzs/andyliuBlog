const DB_URL = 'mongodb://127.0.0.1:27017/loseweight'
var mongoose = require('mongoose');


mongoose.connect(DB_URL, {
    useMongoClient: true,
    /* other options */
});
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
    console.log('数据库连接成功！')
});
mongoose.connection.on('disconnected', () => {
    console.e('数据库断开连接！');
})
mongoose.connection.on('error', (err) => {
    console.error('数据库发生错误 error:' + err);
})


module.exports = mongoose;