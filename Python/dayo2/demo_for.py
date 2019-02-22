count = 0

#while循环
while count<10:
  count += 1
  print(count)

#break/continue
count1 = 0
while True:
  count1 += 1
  if (count1 % 2 != 0):
    continue
  print(count1)
  if (count1 > 10):
      break
 
