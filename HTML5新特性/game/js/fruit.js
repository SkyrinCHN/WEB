//js/fruit.js
//1:创建食物构造函数 fruitObj
var fruitObj = function(){
  this.blue  = new Image();  //蓝色图片
  this.orange = new Image(); //橙色图片
  this.x = [];               //食物坐标
  this.y = [];
  this.l = [];           //图片宽度高度
  this.spd = [];         //速度 出生速度 向上漂
  this.fruitType = [];   //图片类型 
}
//2:为构造原型添加数量 num=30
fruitObj.prototype.num = 30;
//3:为构造原型添加初始化方法
fruitObj.prototype.init = function(){
   for(var i=0;i<this.num;i++){
    //1:坐标
    this.x[i] = Math.random()*canWidth;
    this.y[i] = Math.random()*canHeight;
    //2:宽度
    this.l[i] = 0;
    //3:速度
    this.spd[i] = Math.random()*0.17+0.02;
    //4:类型
    this.fruitType[i] = Math.random() < 0.9 ? "blue":"orange";
   }
   //5:循环外部初始二张图片 
   this.blue.src = "src/blue.png";
   this.orange.src = "src/fruit.png";
}
//4:为构造原型添加绘制方法
fruitObj.prototype.draw = function(){
   //1:创建循环
   for(var i=0;i<this.num;i++){
    //2:依据食物类型判断哪张图片
    if(this.fruitType[i] =="blue"){
       var pic = this.blue;
    }else{
       var pic = this.orange;
    }
    //3:先由小变大  
    //4:向上漂浮       
    if(this.l[i]<=14){
       this.l[i]+=this.spd[i];
    }else{
       this.y[i]-=this.spd[i]*10;
    }
    //5:绘制图片
    ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
   }

}
//5:将文件 fruit.js 添加index.html文件中
//6:main.js 创建fruitObj对象并且调用相应方法
