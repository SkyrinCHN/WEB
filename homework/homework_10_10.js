var score = 61;
score >= 60  && console.log('成绩合格');
score < 60 ||console.log('成绩合格');

var year = 2001;
/*
if(year % 4 ==0 && year % 100 != 0  || year %400 == 0 ){
    console.log('是闰年');
}
else{
    console.log('不是闰年');
}
*/
var a = year % 4 == 0 && year % 100 != 0  || year %400 == 0;
3>2 == a && console.log('这是闰年');
3<2 != a ||console.log('这不是闰年');


