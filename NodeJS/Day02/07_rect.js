/*这是一个矩形模块,其中有两个变量,分别是宽度width/height
    有两个方法,获取面积getArea(),
              获取周长getLength()
    创建07_main.js,引入上一个模块,分别输出圆的周长和面积
*/
var width = 20, height = 10;
function getArea() {
    //console.log(`面积为${width*height}`)
    return width * height;
}
function getLength() {
    //console.log(`周长为:${(width+height)*2}`)
    return 2 * (width + height);
}
module.exports.getArea = getArea;
module.exports.getLength = getLength;