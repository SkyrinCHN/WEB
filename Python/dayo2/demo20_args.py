#定义一个支持默认值参数的方法
def myFunc(host,port=8081):
  print('主机地址是%s,端口号是%d'%(host,port))


myFunc(host='http://127.0.0.1', port=3306)
myFunc('http://localhost', 3306)
myFunc('http://127.0.0.1')

'''
# non-default argument follows default argument (<unknown>, line 11)
  默认值参数不可以出现在实际参数之前
def test(arg1=10, arg2):
    print(arg1, arg2)
'''

