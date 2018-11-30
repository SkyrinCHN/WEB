var i = 0;
var sum = 0;
while (i <= 100) { 
    sum += i;
    i += 2;
}
console.log(sum);

//100内能被3争取的数的和
var i = 3;
var sum = 0;
while (i <= 100) { 
    sum += i;
    i += 3;
}
console.log(sum);

//100内能被3整除的数的和
var i = 0;
var sum = 0;
while (i <= 100) {
    if (i %3 == 0) {
        sum += i;
    }
    i += 1;
}
console.log(sum);



var i = 1;
var sum = 1;
while (i <= 10) { 
    sum *= i;
    i += 1;
}
console.log(sum);