//main.js
//1:创建很多全局变量保存各种角色
//1.1:创建二个全局变量保存画布
var can1 = null;
var can2 = null;
//1.2:创建二个全局变量保存画笔
var ctx1 = null;
var ctx2 = null;
//1.3:创建二个全局变量保存画笔宽度和高度
var canWidth = 0;
var canHeight = 0;
//1.4:创建一个全局变量保存背景图片
var bgPic = null;
//1.5:创建一个全局变量保存海葵对象
var ane = null;
//1.6:创建一个全局变量保存食物对象
var fruit = null;

//2:创建三个函数
//   game
function game(){
    init();
    gameloop();
}
//3: init     初始化游戏所有数据
function init(){
  can1 = document.getElementById("canvas1");
  can2 = document.getElementById("canvas2");
  ctx1 = can1.getContext("2d");
  ctx2 = can2.getContext("2d");
  canWidth = can1.width;
  canHeight = can1.height;
  bgPic = new Image();
  bgPic.src = "src/background.jpg";
  //3.1:创建海葵对象
  ane = new aneObj();
  //3.2:调用海葵对象初始化方法
  ane.init();
  //3.3:创建食物对象并且调用初始化方法
  fruit = new fruitObj();
  fruit.init();
}
//4: gameloop 循环绘制游戏角色函数
function gameloop(){
  //4.1:创建智能定时器执行循环
  requestAnimFrame(gameloop);
  //4.2:绘制背景颜色
  drawBackground();
  //4.3:绘制海葵
  ane.draw();
  //4.4:绘制食物
  fruit.draw();
}
//5: 当页面加载成功后调用game
document.body.onload = game;
//6: 其它小任务
//7: 将 main.js 添加 index.html文件中