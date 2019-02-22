#算数运算符 + - * / % ** //
num1 = 10
num2 = 3
#+ - * /
numSum = num1 + num2
numSub = num1 - num2
numTotal = num1 * num2
numChu = num1 / num2
print(numSum, numSub, numTotal, numChu)

#% ** //
print(num1 % num2, num1 ** num2, num1 // num2);

#关系运算符  > < >= <=  == !=
print(num1 == num2, num1 > num2, num1 < num2, num1 >= num2, num1 <= num2, num1 != num2)

print(1 == True)  #结果为True

#数组间对比计算
myList1 = [100, 200, 300]
mylist2 = [100, 201, 301]
print(myList1 > mylist2)

#赋值运算  = += -+ .. 不支持自增 自减
myAddr = 'chognqing'
[myAddr1, myAddr2] = ['beijing', 'shanghai']
print(myAddr, myAddr1, myAddr2);
age = 20;
# age++  这么写会报错
age += 1;
print(age)

#逻辑运算  与and 或or  非not
frag = True
isOk = False

print(frag and isOk)  #False
print(frag or isOk)  #True
print(not isOk)   #True