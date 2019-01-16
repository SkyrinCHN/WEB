//js/ane.js  海葵 摇来摇去  贝塞尔曲线
//绑在构造函数的原型上 每个元素都能访问 节约内存
//创建一个函数构造函数 aneObj
var aneObj = function () {
  this.x = []; //海草xz的X坐标  Y坐标 起点600
  this.len = []; //所有海草的高度   多高需要计算 230+50的随机数
}
//为构造函数原型添加 Init 函数
aneObj.prototype.init = function () {
  for (let i = 0; i < this.num; i++) {
    this.len[i] = 230 + Math.random() * 50;  //高度230+50的随机数
    this.x[i] = i * 16 + Math.random() * 20; //宽度 16+20的随机数 每根都一样宽 不好看
  }
}
//为构造函数原型添加  num 数量
aneObj.prototype.num = 50;
//为构造函数原型添加 draw绘制函数
aneObj.prototype.draw = function () {
  //开始画  画在背景画布上
  ctx2.save();
  ctx2.strokeStyle = "#6e6b41"; //颜色
  ctx2.globalAlpha = 0.6; //透明度
  ctx2.lineWidth = 20;  //描边宽度
  ctx2.linCap = "round"; //圆角
  //保存画笔的状态  画50根海草  移动到起始点  直线模式画到终点 描边 恢复画笔状态 
  //因为画笔有两只  So....保存恢复 保存恢复
  for (let i = 0; i < this.num; i++) {
    ctx2.beginPath();
    ctx2.moveTo(this.x[i], canHeight);
    ctx2.lineTo(this.x[i], canHeight -this.len[i]);
    // console.log(this.len[i]);
    ctx2.stroke();
  }
  ctx2.restore();
}
