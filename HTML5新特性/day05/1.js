// onmessage = function (e) { console.log(e.data) };
// postMessage("白了又了白");
// var start = new Date().getTime();
// do {
//   var end = new Date().getTime();
// } while (end - start < 5000);
// console.log("5秒钟到咯");

//接收UI线程传过来的值
onmessage = function (e) {
  var n = parseInt(e.data);
  //对值进行计算
  var sum = 0;
  for (var i = 1; i <= n; i++){
    sum += i;
  }
//将计算结果返回UI
  postMessage(sum);
}

