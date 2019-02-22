def myFunc(*args):
  print('方法被调用了',args) #存在元祖当中
  print('元祖数据读取',args[0])
myFunc(1)
myFunc(1, 2, 3, 4, 5)

def tsetFunc(**args):
  print(args)
tsetFunc(a=100,b='b',c='c')