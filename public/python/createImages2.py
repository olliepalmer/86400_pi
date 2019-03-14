from shutil import copyfile
import glob, random
arr = glob.glob('../img2/*.jpg')
for i in range(len(arr),86400):
	copyfile(arr[random.randint(0,100)],'../img2/'+str(i)+'.jpg')