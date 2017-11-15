var mongoose = require('./db');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: String,//用户名
    password: String,//密码
    sex: String,//性别
    icon: String,//头像路径
    qq: String,
    wechat: String,//微信
    nickname: String,//昵称
    phone: String,//手机号
    email: String,//邮箱
    desc: String,//个人描述



},{_id: true});
//name, schema, collection（实际表名）
module.exports = mongoose.model('User',UserSchema,'user');