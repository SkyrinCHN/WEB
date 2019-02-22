def sum(a):
  def add(b):
    return a + b
  return add

funcAdd=sum(10)
res = funcAdd(5)
print(res)

def outer():
  count = 0
  def inner():
    nonlocal count
    count+=1
    print('count is %d' % count)
  return inner
test=outer()
test()