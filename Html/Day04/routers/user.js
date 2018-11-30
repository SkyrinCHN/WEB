const express = require('express');
const router = express.Router();
var pool = require('../pool.js');

router.post('/login',(req,res)=>{
    var obj = req.body;
    var $uname = obj.uname,
        $upwd = obj.upwd;
    if(!$uname){
        res.send('uname is require');
        return;
    }
    if(!$upwd){
        res.send('upwd is require');
        return;
    }
    pool.query('select count(*) from xz_user where uname = ? and upwd = ?',[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result>0){
            res.send({code:200,msg:'login success'})
        }else {
            res.send({code:400,msg:'login failed'})
        }
    })
})

router.post('/reg',(req,res)=>{
    var obj = req.body;
    var $uname = obj.uname;
    var $upwd = obj.upwd;
    if(!$uname){
        res.send('用户名不能为空');
        return;
    }
    if(!$upwd){
        res.send('密码不能为空');
        return;
    }
    pool.query('select uname from xz_user where  uname = ?',[$uname],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send('用户名已存在');
            return;
        }else{
            pool.query('insert into xz_user values(NULL,?,?,NULL,NULL,NULL,NULL,NULL)',[$uname,$upwd],(err,result)=>{
                if(err) throw err;
                console.log(result);
                if(result.affectedRows>0){
                    res.send('success')
                }else{
                    res.send('failed')
                }
            })
        }
    })
})
module.exports = router;