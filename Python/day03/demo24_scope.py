#global  全局变量
count = 0

def modifyCount():
  #修改全局变量
  global count 
  count+=1
  print(count)


modifyCount()