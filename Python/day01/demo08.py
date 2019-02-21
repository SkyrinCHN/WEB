
myDict = {};
chineseScore = int(input('语文成绩'))
mathScore = int(input('数学成绩'))
englishScore = int(input('英语成绩'))
myList = [chineseScore, mathScore, englishScore]
maxVal = max(myList)
minVal = min(myList)
avgVal = (chineseScore + mathScore + englishScore) / 3

myDict['MaxValue'] = maxVal
myDict['MinValue'] = minVal
myDict['avgVal'] = avgVal

print(myDict)
