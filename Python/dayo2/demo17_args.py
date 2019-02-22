#方法调用过程中,是可以通过键值对的方法指定关键字参数,调整参数的顺序
def myFunc(arg1, arg2):
  print('arg1 is %d,arg2 is %d' % (arg1, arg2))
  
myFunc(10, 20)
myFunc(arg1=10, arg2=20)

def test(arg1,arg2,arg3):
  print('%d,%d,%d' % (arg1, arg2, arg3))
test(10, 20, 30)
test(arg1=1,arg2=20,arg3=-1)