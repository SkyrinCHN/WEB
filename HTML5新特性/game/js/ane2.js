//js/ane2.js

//创建构造函数 aneObj 添加num=50 
var aneObj = function () {
  this.rootx = [];//起点坐标
  this.headx = [];//终点坐标
  this.heady = [];//终点坐标
  this.amp = [];//摆动幅度 幅度范围
  this.alpha = 0;//正弦函数的返回值 -1 0 1
}
aneObj.prototype.num = 50;
//为构造函数添加初始化方法
aneObj.prototype.init = function () {
  for (let i = 0; i < this.num; i++) {
    this.rootx[i] = i * 16 + Math.random() * 20;
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHeight - 250 + Math.random() * 50;
    this.amp[i] = Math.random() * 20 + 20;
  }
}
//添加绘制方法
aneObj.prototype.draw = function () {
  ctx2.save();
  ctx2.strokeStyle = "#3b154e";
  ctx2.lineWidth = 20;
  ctx2.globalAlpha = 0.6;
  ctx2.lineCap = "round";
  //给摆动幅度计算值 -1~1之间  我也不知道为什么这么计算 但是这样会出结果
  this.alpha += 32 * 0.0008;
  var l = Math.sin(this.alpha);
  // console.log(l);
  for (let i = 0; i < this.num; i++) {
    //开始画
    ctx2.beginPath();
    //重新计算一个终点的坐标
    this.headx[i] = this.rootx[i] + this.amp[i] * l;
    ctx2.moveTo(this.rootx[i], canHeight);
    ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
    // ctx2.lineTo(this.rootx[i],);
    ctx2.stroke();
  }
  ctx2.restore();
}
//引入ane2.js  把先前那个ane.js注释了 这个才是成型版