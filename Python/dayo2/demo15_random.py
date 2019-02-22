import random
number = random.randint(0, 50)

while True:
  guessNumber =int(input('你猜一个数:')) 
  if guessNumber>number:
    print('大了O(∩_∩)O~')
  elif guessNumber<number:
    print('小了O(∩_∩)O~')
  else:
    print('你猜对了')
    break
  
