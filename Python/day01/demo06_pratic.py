'''
  准备一个数组
  通过input获取用户名和密码
  准备一个字典,接收用户名和密码和数组中的第二个元素
  输出字典
'''

myList = ['skrin', 'liuhai', '123456']
uname = input('用户名')
upwd = input('密码')
print(uname, upwd)
myDict = {'用户名': uname, '密码': upwd, '数组的第二个元素': myList[1]}
print(myDict)
