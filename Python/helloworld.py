#!/usr/bin/env python3
# _*_ coding: utf-8 _*_

#print,if else语句练习
'''
print('hello world')
print('你好',input())
print('请输入您的姓名')
name = input()
print('请输入年龄')
a = int(input())
if a>=18:
    print(name,'您已经成年了')
elif a<18 and a>=12:
    print(name,'您现在是青少年')
else:
    print(name,'您现在小学还没毕业呢,别闹')
radius = 30
print(radius * radius * 3.14)

radius=int(input('请输入周长'))
print('圆的面积为:',radius*radius*3.14)
'''
#下面两句代码,代表的意思不一样
#foo函数现在包含input函数本身,所以它事实上可以像foo("What is your age?")这样使用;
#这被称为动态函数调用
#而bar包含用户输入的值
'''
foo = input 
bar = input()

temperature=int(input('What is the temperature of the spam?'))
if temperature> 50:
    print('The salad is properly cooked')
else:
    print('Cook the salad some more')
'''
#if elif else 条件判断
'''
print('您好,欢迎使用面积计算解决方案')
print('-------------------------')
print('请先选择计算什么图形')
print('1-> 长方形')
print('2-> 圆形')
print('3-> 正方形')
print('4-> 三角形')
print('-------------------------')
shape=int(input('>:'))
if shape == 1:
    print('-------------------------')
    height= float(input('请输入长方形的长度>:'))
    width = float(input('请输入长方形宽度>:'))
    area  = height * width
    print('长方形面积为:',area)
    print('------------------谢谢使用')
    print('----------------------再见')
elif shape == 2:
    print('-------------------------')
    radius = float(input('请输入圆的半径>:'))
    area = 3.14 * (radius ** 2)
    print('圆形的面积为:',area)
    print('-----------------谢谢使用')
    print('---------------------再见')
elif shape == 3:
    lenth=float(input('请输入正方形的边长->:'))
    area = lenth ** 2
    print('正方形的面积为:',area)
    print('-----------------谢谢使用')
    print('---------------------再见')
elif shape == 4:
    border = float(input('请输入三角形的底->:'))
    height = float(input('请输入三角形的高->:'))
    area = border * height
    print('三角形的面积为:',area)
    print('-----------------谢谢使用')
    print('---------------------再见')
else:
    print('-------------------------')
    print('-------输入有误,欢迎您的使用')
    print('----------------------再见')
'''

#for循环
'''
for fruit in '苹果','香蕉','葡萄','荔枝':
    print('我喜欢',fruit)
'''
'''
for number in range(1,10000):
    print('老婆,这是我第',number,'次说爱你')
print('老婆,我一共对你说了',number,'次我爱你')
'''

#while 循环
'''
#导入python自带的time模块中导入了函数sleep
from time import sleep
print('开始煮开水.我半分钟后回来')
sleep(30)
print('检查温度了---')
fina_temperature = 100
test_temperature = float(input('水温多少度了?'))
while test_temperature < fina_temperature:
    print('温度不够,继续煮')
    sleep(5)
    test_temperature=int(input('水温现在多少度了?'))
print('开水煮好了,可以泡面了')
'''

#用户持续给数,直到加到100
'''
print('加法游戏开始了,一直加到100或以上')
a = float(input('输入基础数字'))
b = float(input('加多少'))
c = a + b
print('现在已经加到',c,'了')
d = 100
while c < d :
    print('--------------------')
    print('没到100,还要继续加')
    e = float(input('继续加多少>:'))
    c = c + e 
    print('现在已经加到',c)
print(c,'>= 100.游戏结束')
'''



#用户给N个数,打印相加的总和
'''
total = 0 
for number in range(1,6):
    value = int(input('请输入数字->:'))
    print()
    print('这是第',number,'个数')
    total = total + value
    print('现在的和为',total)
    print('----------------------')
print('总和为',total)
'''
'''
number = float(input('What is the number?'))
floor = 0
while floor<=number:
    floor = floor + 1
floor = floor - 1
print('The floor of',number,'is',floor)
'''
def floor (number):
    result = 0
    while result <= number:
        result = result + 1
    result = result - 1
    return result
