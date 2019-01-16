var fruitObj = function () { //构造函数
  this.blue  = new Image();  //蓝色图片
  this.orange = new Image(); //橙色图片
  this.x = [];               //食物坐标
  this.y = [];
  this.l = [];           //图片宽度高度
  this.spd = [];         //速度 出生速度 向上漂
  this.fruitType = [];    //食物类型
  this.aneNo = [];        //出生在第几个海草
  this.alive = [];        //出生状态 
}            
fruitObj.prototype.num = 30;              //原型变量30
fruitObj.prototype.init = function () {   //原型初始化方法 init
  for (var i = 0; i < this.num; i++){
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.l[i] = 0;
    this.spd[i] = Math.random() * 0.17 + 0.02;
  }
  this.blue.src = "src/blue.png";
  this.orange.src = "src/fruit.png";
}  
fruitObj.prototype.draw = function () {
  for (let i = 0; i < this.num; i++) {
    if (this.alive[i]) {
      
    }    
  }
}  //原型绘制方法 draw