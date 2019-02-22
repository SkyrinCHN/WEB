list = []
for tmp in range(3):
    myValue = int(input('请输入成绩:'))
    list.append(myValue)
print(list)
# avgScore = (list[0] + list[1] + list[2]) / 3
totalScore = 0
for tmp in range(len(list)):
    totalScore += list[tmp]
avgScore = totalScore/len(list)
print('平均值是%d' % avgScore)
if avgScore >= 80:
    print('优秀')
else:
    print('一般')
