const express = require("express");
const cors = require("cors");
const pool = require("./pool")
var app = express();
app.listen(3000);
app.use(express.static("public"));
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))
app.get("/sales", (req, res) => {
  var rows = [];
  rows.push({ id: 1, name: "东城", value: 120 });
  rows.push({ id: 2, name: "南城", value: 190 });
  rows.push({ id: 3, name: "西城", value: 110 });
  rows.push({ id: 4, name: "北城", value: 130 });
  res.send(rows);
})
app.get("/yaopin", (req, res) => {
  // var year = req.query.year;
  var name = req.query.name;
  var sql = "select id,name,month,sales from xz_yaopin where name=? ";
  pool.query(sql, [name], (err, result) => {
    if (err) throw err;
    res.send(result);
  })
})