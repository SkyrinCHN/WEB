def getList():
  userList = []
  def login(uName):
    nonlocal userList
    userList.append(uName)
    return userList
  return login
res = getList()
res1 = res('刘海')
print(res1)
