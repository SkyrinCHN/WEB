const express = require("express");
const cors = require("cors");
const pool = require("./pool")
var app = express();
app.use(express.static("public"));
app.listen(3000);

app.use(cors({
  origin: ["http://127.0.0.1:3001", "http://localhost:3001"],
  credentials: true
}))
// 功能一:首页轮播图
app.get("/getImages", (req, res) => {
  var pics = [{
      id: 1,
      img_url: "http://127.0.0.1:3000/img/banner1.png"
    },
    {
      id: 2,
      img_url: "http://127.0.0.1:3000/img/banner2.png"
    },
    {
      id: 3,
      img_url: "http://127.0.0.1:3000/img/banner3.png"
    },
    {
      id: 4,
      img_url: "http://127.0.0.1:3000/img/banner4.png"
    }
  ];
  res.send(pics);
})
app.get("/getNews", (req, res) => {
  //1.参数 pno页码 pagesize每页大小
  var pno = req.query.pno;
  console.log(req.query);
  console.log(pno);
  var pageSize = req.query.pageSize;
  //验证pno pagesize 正则表达式
  if (!pno) pno = 1;
  if (!pageSize) pageSize = 7;
  var reg = /^[0-9]{1,}$/
  if (!reg.test(pno)) {
    res.send({
      code: -1,
      msg: "页码格式不正确"
    });
    return;
  }
  if (!reg.test(pageSize)) {
    res.send({
      code: -2,
      msg: "每页大小格式不正确"
    });
    return;
  }
  //没值 给默认值1

  //2.创建sql语句 查询总页数
  var sql = "select count(id) as c from xz_news";
  var obj = {
    code: 1
  };
  var progress = 0; //sql执行进度
  pool.query(sql, (err, result) => {
    if (err) throw err;
    // console.log(result[0].c);
    var pageCount = Math.ceil(result[0].c / pageSize);
    obj.pageCount = pageCount;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  })
  //查询当前页内容
  pageSize = parseInt(pageSize);
  var offset = parseInt((pno - 1) * pageSize);
  var sql1 = "select id,ctime,title,img_url,point,content from xz_news limit ?,?";
  pool.query(sql1, [offset, pageSize], (err, result) => {
    if (err) throw err;
    // console.log(result);
    obj.data = result;
    progress += 50;
    console.log(result);
    if (progress == 100) {
      res.send(obj);
    }
  })
})
//功能三:依据新闻编号查询新闻详细信息
app.get("/getNewsInfo", (req, res) => {
  //1:参数   id
  var id = req.query.id;
  //2:sql    SELECT id,title,ctime,content FROM 
  //         xz_news WHERE id = ?
  var sql = " SELECT id,title,ctime,content";
  sql += " FROM xz_news WHERE id = ?";
  //3:json   {code:1,data:obj}
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      data: result[0]
    });
  })
})
app.get("/addComment", (req, res) => {
  //获取参数
  var nid = req.query.nid;
  var content = req.query.content;
  //SQL语句
  var sql = "insert into xz_comment(id,content,ctime,nid) values(null,?,now(),?)";
  pool.query(sql, [content, nid], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({code:1,msg:"评论发表成功"});
    } else {
      res.send({code:-1,msg:"评论发表失败"})
    }
  })
})
//功能五:依据新闻编号(id),查询指定新闻编号评论列表
app.get("/getComments",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  var nid = parseInt(req.query.nid);
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页码格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_comment";
  sql +=" WHERE nid = ?"
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,[nid],(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       obj.pageCount = pageCount;
       progress += 50;
       if(progress == 100){
        res.send(obj);
       }
  });
  //  查询当前页内容
var sql=" SELECT id,ctime,content";
    sql +=" FROM xz_comment";
    sql +=" WHERE nid = ?"
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
})