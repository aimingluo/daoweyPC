var express = require('express');
var router = express.Router();
var data = require('../data.json');
var sms_util = require('../public/sms_test/sms_util')
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/fuwu',function (req,res,next) {
  //console.log(req)
  res.send(data)
})
router.get('/service',function (req,res,next) {
  res.send(data)
})





/*注册*/
  /*判断该手机号是否注册过*/
router.get('/register',function (req,res,next) {
  const phone = req.query.phone
  const oldPhone = req.query.oldPhone
    if(oldPhone == phone){
      res.send('该号码已被注册，请更换密码')
    }else{
      res.send('可以注册')
    }
})
  /*发送短信验证码*/
var codes={}
router.get('/sendcode',function (req,res,next) {
  const number = req.query.number
  var code = sms_util.randomCode(6)
  sms_util.sendCode(number,code,function (success) {
    if(success){
      codes[number] = code
      res.send('发送成功了')
    }
  })
})
  /*验证短信验证码*/
router.post('/regist',function (req,res,next) {
  const number = req.body.number
  const code = req.body.code
  //const mima = req.body.mima
  if(!codes[number] || codes[number]!==code){
    res.send({code:1})
    return
  }
  //删除验证码
  //delete codes[number]
  /*数据库操作*/
  /*将用户名和密码存入数据库，密码存的是加密后的*/
  res.send({code:0})
})

/*/!*登录*!/
router.get('/loginer',function (req,res,next) {
  const name = req.query.name
  const mima = req.query.mima
 /!* for(var i=0;i<phones.length;i++){
    if(name in phones[i]){
      res.send({code:1})
    }else{
      res.send({code:0})
    }
  }*!/
 /!*phones.findOne({name:name},function (error,mima) {
     if(mima==mima){
       res.send({code:1})
     }else {
       res.send({code:0})
     }
   })*!/
   /!*if(){

   }*!/

})*/



/*router.get('/head', function(req, res, next) {
  res.render('header', { title: 'heade' });
})*/

module.exports = router;
