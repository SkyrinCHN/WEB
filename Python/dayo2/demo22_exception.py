# try except finally 捕获多个错误
try:
  score = int(input('myscore'))
  print('score is' + score)

  '''
  出错挨个处理
except TypeError:
  print('出现了类型错误')
except ValueError:
  print('出现了值错误')
  '''
  '''
  一次性捕获,集中处理
except (TypeError, ValueError):
  print('值或类型出现错误')
'''
except Exception:
  print('反正就是出错了')


try:
  # print(avgScore)
  raise(NameError(101))
except NameError as msg:
  print('调用了没命名的变量',msg)