def myFunc1(num):
    # if num == 0:
    #     return 1
    # else:
    #     return num * myFunc1(num - 1)
    result = 1
    while True:
      result = num *result
      num -= 1
      if (num == 1):
        print(result)
        break
    


myFunc1(4)


def myFunc2(*args):
    print(len(args))

myFunc2(1,2,3,4,5,6,78,312,423,4235,2345,3,45)