#try except finally
try:
  print(name)
except NameError:   #除开这个错误 此处是NameError
  print('你调用了一个不存在的变量')
finally: #不管去了哪个分支,最终都会到这
  print('最终到这了')
