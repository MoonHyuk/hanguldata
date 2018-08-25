import json
import codecs

d = {}

f = codecs.open("data.txt", "r", "utf-8")
key = ""
value = {}
j = 0

for r in f.readlines():
    j += 1
    r = r.strip()
    if r.find(':') == -1:
        continue
    i = r.split(': ')

    if i[0] == '"Sheet"':
        continue
    if i[0] == '"3.표기"' or i[0] == '"3. 표기"':
        key = i[1][1:-2]
    elif i[0] != '"음절이웃"':
        value[i[0][1:-1]] = i[1][1:-2]

    else:
        print(value["2.ID"])
        value[i[0][1:-1]] = i[1][1:-1]
        d[key] = value
        value = {}

result = open("dict.txt", "w")
result.write(str(d))