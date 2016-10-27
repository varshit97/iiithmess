f = open('output.txt')
for line in f:
    liney = line.strip().split(' ')
    liney = filter(None, liney)
    for l in liney:
        print l.strip()
f.close()
