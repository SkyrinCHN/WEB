const express = require("express");
const cors = require("cors");
const pool = require("./pool");
const session = require("express-session");
var app = express();
app.use(express.static("public"));
app.listen(3000);

app.use(cors({
  origin: ["http://127.0.0.1:3001", "http://localhost:3001"],
  credentials: true
}))
//session配置
app.use(session({
  secret: "128位随机字符串", //安全令牌
  resave: false, //请求保存
  saveUninitialized: true, //初始化
  cookie: { //sessionid保存时
    maxAge: 1000 * 60 * 60 * 24 //间1天 cookie
  }
}));

//功能十二:退出登录
app.get("/logout", (req, res) => {
  req.session.uid = null;
  res.send({
    code: 1,
    msg: "退出成功"
  })
})
// 功能一:首页轮播图
app.get("/getImages", (req, res) => {
  var pics = [{
      id: 1,
      img_url: "http://localhost:3000/img/banner1.png"
    },
    {
      id: 2,
      img_url: "http://localhost:3000/img/banner2.png"
    },
    {
      id: 3,
      img_url: "http://localhost:3000/img/banner3.png"
    },
    {
      id: 4,
      img_url: "http://localhost:3000/img/banner4.png"
    }
  ];
  res.send(pics);
})
app.get("/getGoodsInfo", (req, res) => {
  var pics = [{
      id: 1,
      img_url: "http://127.0.0.1:3000/img/lajiao1.png"
    },
    {
      id: 2,
      img_url: "http://127.0.0.1:3000/img/lajiao2.png"
    },
    {
      id: 3,
      img_url: "http://127.0.0.1:3000/img/lajiao3.png"
    },
    {
      id: 4,
      img_url: "http://127.0.0.1:3000/img/lajiao4.png"
    },
    {
      id: 5,
      img_url: "http://127.0.0.1:3000/img/lajiao5.png"
    }, {
      id: 6,
      img_url: "http://127.0.0.1:3000/img/lajiao6.png"
    }, {
      id: 7,
      img_url: "http://127.0.0.1:3000/img/lajiao7.png"
    }, {
      id: 8,
      img_url: "http://127.0.0.1:3000/img/lajiao8.png"
    }
  ];
  res.send(pics);
})
app.get("/getNews", (req, res) => {
  //1.参数 pno页码 pagesize每页大小
  var pno = req.query.pno;
  // console.log(req.query);
  // console.log(pno);
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
    // console.log(result);
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
      res.send({
        code: 1,
        msg: "评论发表成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "评论发表失败"
      })
    }
  })
})
//功能五:依据新闻编号(id),查询指定新闻编号评论列表
app.get("/getComments", (req, res) => {
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  var nid = parseInt(req.query.nid);
  //1.2:默认值
  if (!pno) {
    pno = 1;
  }
  if (!pageSize) {
    pageSize = 7;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
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
      msg: "页大小格式不正确"
    });
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_comment";
  sql += " WHERE nid = ?"
  var progress = 0; //sql执行进度
  obj = {
    code: 1
  };
  pool.query(sql, [nid], (err, result) => {
    if (err) throw err;
    //console.log(result[0].c);
    var pageCount = Math.ceil(result[0].c / pageSize);
    obj.pageCount = pageCount;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  });
  //  查询当前页内容
  var sql = " SELECT id,ctime,content";
  sql += " FROM xz_comment";
  sql += " WHERE nid = ?"
  sql += " LIMIT ?,?"
  var offset = parseInt((pno - 1) * pageSize);
  pageSize = parseInt(pageSize);
  pool.query(sql, [nid, offset, pageSize], (err, result) => {
    if (err) throw err;
    //console.log(result);
    obj.data = result;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  });
})

//功能六:商品列表
app.get("/getGoodsList", (req, res) => {
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if (!pno) {
    pno = 1;
  }
  if (!pageSize) {
    pageSize = 4;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
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
      msg: "页大小格式不正确"
    });
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_product";
  var progress = 0; //sql执行进度
  obj = {
    code: 1
  };
  pool.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(result[0].c);
    var pageCount = Math.ceil(result[0].c / pageSize);
    obj.pageCount = pageCount;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  });
  //  查询当前页内容
  var sql = " SELECT id,name,img_url,price,bank";
  sql += " FROM xz_product";
  sql += " LIMIT ?,?"
  var offset = parseInt((pno - 1) * pageSize);
  pageSize = parseInt(pageSize);
  pool.query(sql, [offset, pageSize], (err, result) => {
    if (err) throw err;
    //console.log(result);
    obj.data = result;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  });
});
//功能七:添加商品到购物车
app.get("/addCart", (req, res) => {
  //1:参数 uid pid price count
  var uid = parseInt(req.session.uid);
  var pid = parseInt(req.query.pid);
  var price = parseFloat(req.query.price);
  var count = parseInt(req.query.count);
  //2:sql  INSERT
  var sql = " INSERT INTO `xz_cart`(`id`, ";
  sql += " `uid`, `pid`, `price`,";
  sql += " `count`) VALUES (null,?,?,?,?)";
  pool.query(sql, [uid, pid, price, count], (err, result) => {
    if (err) throw err;
    // console.log(result);
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "添加成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "添加失败"
      });
    }
  })
  //3:json {code:1,msg:"添加成功"}
});

//功能八:查询商品信息(补充价格信息,前边没有)
app.get("/getProduct", (req, res) => {
  //1:参数 商品id
  var pid = parseInt(req.query.id);
  //2:sql  SELECT id,name,price,
  var sql = " SELECT `id`, `name`, `img_url` , `price`, `bank` FROM `xz_product` WHERE id=?";
  pool.query(sql, [pid], (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      data: result[0]
    })
  });
});

//功能九:注册功能
app.get("/register", (req, res) => {
  var name = req.query.name;
  var pwd = req.query.pwd;
  var reg = /^[a-z0-9_]{8,12}$/;

  if (!reg.test(name)) {
    res.send({
      code: -1,
      msg: "用户名格式不正确"
    });
    return;
  }
  if (pwd.trim().length < 6 || pwd.trim().length > 12) {
    res.send({
      code: -1,
      msg: "密码长度不正确"
    })
    return;
  }
  var sql = "insert into xz_login values(null,?,md5(?))"
  pool.query(sql, [name, pwd], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "注册成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "验证通过,但注册失败"
      });
    }
  })
})

//功能十: 验证用户名
app.get("/existsName", (req, res) => {
  var name = req.query.name;
  var reg = /^[a-z0-9_]{8,12}$/i;
  if (!reg.test(name)) {
    res.send({
      code: -1,
      msg: "用户名格式不正确"
    });
    return;
  }
  var sql = "select count(id) as c from xz_login where name=?";
  pool.query(sql, [name], (err, result) => {
    if (err) throw err;

    if (result[0].c > 0) {
      res.send({
        code: -1,
        msg: "用户名已存在"
      });
    } else {
      res.send({
        code: 1,
        msg: "用户名可使用"
      });
    }
  })
})

//功能十一:登录
app.get("/Login", (req, res) => {
  var name = req.query.name;
  var pwd = req.query.pwd;
  var reg = /^[a-z0-9_]{3,12}$/i;
  if (!reg.test(name)) {
    res.send({
      code: -1,
      msg: "用户名格式不正确"
    });
    return;
  }
  var sql = "select id,count(id) as c from xz_login where name =? and pwd = md5(?) group by id";
  pool.query(sql, [name, pwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      req.session.uid = result[0].id;
      res.send({
        code: 1,
        msg: "登录成功"
      });
      console.log(req.session.uid);
      console.log("用户的UID为:" + req.session.uid)
      console.log("查询count的结果为:" + result[0].c);
    } else {
      // console.log(result);
      res.send({
        code: -1,
        msg: "用户名或密码错误"
      })
    }

  })
})
//功能十二:购物车中的数据
app.get("/getCartList", (req, res) => {
  var uid = req.session.uid;
  console.log(uid);
  var sql = "select p.name,c.count,c.price,c.id  from xz_product p , xz_cart c where p.id =c.pid and c.uid=?";
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({
      code: 1,
      data: result
    });
  })
})

//功能十三:更新购物车
app.get("/updateCart", (req, res) => {
  var id = req.query.id;
  var count = req.query.count;
  var sql = "update xz_cart set count=? where id = ?";
  pool.query(sql, [count, id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "修改成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "修改失败"
      });
    }
  })
})

//功能十四 小程序的九宫格
app.get("/getNavImages", (req, res) => {
  var list = [{
    id: 1,
    img_url: "http://localhost:3000/img/icons/grid-01.png",
    title: "美食"
  }, {
    id: 2,
    img_url: "http://localhost:3000/img/icons/grid-02.png",
    title: "洗浴"
  }, {
    id: 3,
    img_url: "http://localhost:3000/img/icons/grid-03.png",
    title: "结婚啦"
  }, {
    id: 4,
    img_url: "http://localhost:3000/img/icons/grid-04.png",
    title: "KTV"
  }, {
    id: 5,
    img_url: "http://localhost:3000/img/icons/grid-05.png",
    title: "找工作"
  }, {
    id: 6,
    img_url: "http://localhost:3000/img/icons/grid-06.png",
    title: "指导班"
  }, {
    id: 7,
    img_url: "http://localhost:3000/img/icons/grid-07.png",
    title: "汽车保养"
  }, {
    id: 8,
    img_url: "http://localhost:3000/img/icons/grid-08.png",
    title: "租房"
  }, {
    id: 9,
    img_url: "http://localhost:3000/img/icons/grid-09.png",
    title: "装修"
  }];
  res.send(list);

})
//功能十五  小程序 商店列表
app.get("/getShopList", (req, res) => {
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if (!pno) {
    pno = 1;
  }
  if (!pageSize) {
    pageSize = 7;
  }
  //2:验证正则表达式
  var reg = /^[0-9]{1,}$/;
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
      msg: "页大小格式不正确"
    });
    return;
  }
  //3:创建sql
  //  查询总页数
  var sql = "SELECT count(id) as c FROM xz_shoplist";
  var progress = 0; //sql执行进度
  obj = {
    code: 1
  };
  pool.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(result[0].c);
    var pageCount = Math.ceil(result[0].c / pageSize);
    obj.pageCount = pageCount;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  });
  //  查询当前页内容
  var sql = " SELECT id,img_url,dname,daddr,dphone,dtime,dpoint FROM xz_shoplist  LIMIT ?,?";
  var offset = parseInt((pno - 1) * pageSize);
  pageSize = parseInt(pageSize);
  pool.query(sql, [offset, pageSize], (err, result) => {
    if (err) throw err;
    //console.log(result);
    obj.data = result;
    progress += 50;
    if (progress == 100) {
      res.send(obj);
    }
  });
});

//功能十六 小程序添加商品
app.get("/addProduct", (req, res) => {
  var pname = req.query.pname;
  var price = req.query.price;
  var sql = "insert into xz_product(name,price) values(?,?)";
  pool.query(sql, [pname, price], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({code:1,msg:"添加成功"})
    } else {
      res.send({code:-1,msg:"添加失败"})
    }
  })
})

//小程序 消息列表
app.get("/getMessage",(req,res)=>{
  //1:参数       pno 页码;pageSize 页大小
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.2:默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 2;
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
  var sql = "SELECT count(id) as c FROM xz_message";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
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
var sql=" SELECT id,img_url,title,ctime,desc2,content";
    sql +=" FROM xz_message";
    sql +=" LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
});