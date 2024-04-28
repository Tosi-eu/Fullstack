import os

count=0
for file in os.listdir(path='ll/'):
    print(f'<iframe src="{file}" frameborder="0"></iframe>')
    count += 1
    if count % 6 == 0:
        print()