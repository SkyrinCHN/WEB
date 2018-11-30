const express = require('express');
const router = express.Router();
var pool = require('../pool.js')
//增加数据
router.post('/add',(req,res)=>{
    var obj =  req.body,
        $sname = obj.sname,
        $ssex = obj.ssex,
        $age = obj.age,
        $education = obj.education,
        $university = obj.university,
        $specoalty = obj.specialty,
        $work_ex = obj.work_ex,
        $phone = obj.phone,
        $qq = obj.qq,
        $address = obj.address,
        $contact =obj.contact,
        $contact_phone = obj.contact_phone,
      i = 400;
  console.log(obj);
    for(var k  in obj) {
        if (!obj[k]) {
            res.send({code: i, msg: k + 'is\trequre'});
            return;
        }
    }
    pool.query('insert into students_basic values(null,?,?,?,?,?,?,?,?,?,?,?,?)',[$sname,$ssex,$age,$education,$university,$specoalty,$work_ex,$phone,$qq,$address,$contact,$contact_phone],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send('插入成功');
        }else {
            res.send('插入失败');
        }
    })

})
// router.get('/list',(req,res)=>{
//     var obj=req.query;
//     pool.query("select * from students_basic",(err,result)=>{
//         if(err) throw err;
//         console.log(result );
//         var arr = Array.from(result);
//         var title = '',newArr='';
//         var chinsesname = ['编号','姓名','性别','年龄','学历','毕业院校','专业',
//             '工作经验','手机','QQ','现住地址','紧急联系人','紧急联系人电话'];
//         for(var k in arr ){
//             newArr += '<td>'+arr[k]+'<td>'
//         }
//         res.send(chinsesname);
//     })
// })
module.exports = router;