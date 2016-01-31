#!/usr/bin/python
# Copy this file to your path (/usr/local/bin is a good choice) 
# And don't forget to make it executable with chmod 755
# Should be compatible with Python 2.7.x and 3.x

from subprocess import call
import sys

if len(sys.argv)==1:
        print('\033[93m'+'I need a file to compile and run! Exiting. \nTry again with "jrun <file.java>"'+'\033[0m')
        sys.exit(1);

mkdir = call('mkdir bin', shell=True)
if mkdir!=1 and mkdir !=0:
        print('\033[93m'+'Something screwed up when I tried to create ./bin'+'\033[0m')
        system.exit(2)

baseClass = sys.argv[1]

if(len(baseClass)>5 and baseClass.rfind('.java')==len(baseClass)-5):
        pass

elif(baseClass.rfind('.')==len(baseClass)-1):
        baseClass+='java'

else:
        baseClass+='.java'        

print('\033[0m'+'Compiling: '+baseClass+ ' and any linked assets into ./bin \033[91m')
val = call('javac -d bin '+baseClass, shell=True)

if val!=0:
    print('Java compiler exited with code: '+str(val)+' while trying to compile '+baseClass+'\033[0m')
    system.exit(val)
    
elif val==0:
    baseClass = baseClass.rstrip('.java')
    opts = ""
    if len(sys.argv) > 2:
        for i in xrange(2, len(sys.argv)):
            opts += ' '+sys.argv[i]
    	
    print('\033[92m'+'Compiled Successfully! Attempting to run class '+baseClass+'\033[0m')
    
    try:
        call('cd ./bin; java '+baseClass+' '+opts, shell=True)
    except KeyboardInterrupt: 
        print("")