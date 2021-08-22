import os
def makeCommit():
    os.system('git add .')
    os.system('git commit -m "new commit"')
makeCommit()