#循环结构写法
myList = [100, 200, 300]

# for循环取值很方便,但是不可以直接获取下标
for tmp in myList:
  print(tmp)

for tmp in range(10):
  print(tmp)

for tmp in range(len(myList)):
  print(tmp,myList[tmp])