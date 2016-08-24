print('\r\n'.join(map(lambda i:'\t'.join(map(lambda c:"%sx%s=%s"%(c,i,c*i),range(1, i+1))),range(1, 10))))
