import os
import time
def makeCommit():
    os.system('git add .')
    os.system('git commit -m "new commit"')
    time.sleep(10)

while True:    
    makeCommit()