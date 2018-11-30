const express = require('express');
//路由器是express下的一个功能
const router = express.Router();
//引入连接池
var pool = require('../pool.js');

router.get('/ajaxDemo', (req, res) => {
  res.send('我的第一个ajx程序');
})

//2.login接收参数
router.get('/login', (req, res) => {
  //获取用户名称
  //获取用户密码
  var $uname = req.query.uname;
  var $upwd = req.query.upwd;
  //验证用户名和密码存在
  console.log($uname);
  console.log($upwd);
  if (!$uname) {
    res.send('用户名为空');
    return;
  }
  if (!$upwd) {
    res.send('密码不能为空');
    return;
  }
  var sql = 'select * from xz_user where uname = ? and upwd = ?';
  // res.send('用户名为:' + $uname + "<br/>密码为:" + $upwd);
  pool.query(sql,[$uname, $upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('登录成功')
    } else {
      res.send('登录失败');
    }
  })
})
router.post('/post_login', (req, res) => {
  //获取用户名称
  //获取用户密码
  var $uname = req.body.uname;
  var $upwd = req.body.upwd;
  //验证用户名和密码存在
  console.log($uname);
  console.log($upwd);
  if (!$uname) {
    res.send('用户名为空');
    return;
  }
  if (!$upwd) {
    res.send('密码不能为空');
    return;
  }
  var sql = 'select * from xz_user where uname = ? and upwd = ?';
  // res.send('用户名为:' + $uname + "<br/>密码为:" + $upwd);
  pool.query(sql, [$uname, $upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('登录成功')
    } else {
      res.send('登录失败');
    }
  })
})
router.get('/userlist', (req, res) => {
  var sql = 'select * from xz_user';
  pool.query(sql, (err, result) => {
    if (err) throw err
    res.send(result);
  })
})
router.get("/regcheck", (req, res) => {
  var $uname = req.query.uname;
  var sql = "select * from xz_user where uname = ?";
  pool.query(sql, [$uname], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      checkname.innerHTML = "用户名可用";
    } else {
      checkname.innerHTML = "用户名不可用";
    }
  })
})
//导出路由
module.exports = router;