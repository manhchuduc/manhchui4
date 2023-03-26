import os

updatemessage = str(input("Update message: \n"))

os.system("git add .")
os.system(f'git commit -m "{updatemessage}"')
os.system("git push")