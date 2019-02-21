# 元祖:储存不希望被修改的数据 (带了手铐的数组,只读)
myTuple = (100, 200, 300)
print(type(myTuple), myTuple)
print(myTuple[1])
# myTuple[0]=200  会报错 不允许修改

#字典(键值对)
myDict = {'stuName': 'zhangsan', 'stuAge': 20}
print(myDict, type(myDict))
print(myDict['stuName'])
print(myDict.get('stuName'))
# print(myDict['stuScore'])     找不到对应的key值 就会报错
print(myDict.get('stuScore'))  #推荐使用此方式 即使找不到key值 也不会报错 返回None

#set 集合(不会重复)
mySet = set([100, 200,200,300,300])
print(mySet,type(mySet))