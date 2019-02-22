def myFunc(*args):
  return print(max(args), min(args))

myFunc(100,200,300) 

myList = [1, 2, 3]
try:
  print(myList[3])
except IndexError:
  print('下标读取出错了')
finally:
  print('程序执行完毕')