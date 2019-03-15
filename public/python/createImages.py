## create 86400 images with random colours
from PIL import Image, ImageDraw
import randomcolor, numpy
for i in range(2800):
	imarray = numpy.random.rand(480,640,3) * 255
	col = randomcolor.RandomColor()
	# img = Image.fromarray(imarray.astype('uint8')).convert('RGB')
	img = Image.new('RGB',(640,480),color=col.generate()[0])
	fn = str(i) + '.jpg'
	img.save('../img22/'+fn)



# # # create 86400 images with random similar-hued pixels
# # # makes 100 random images, then copies them randomly 83900 times
# from PIL import Image
# import randomcolor, random

# col = randomcolor.RandomColor()

# for x in range(100):
# 	arr = col.generate(hue=col.generate()[0],count=random.randrange(3,10))
# 	fn = str(x) + '.jpg'
# 	img = Image.new('RGB',(640,480), "black")
# 	pixels = img.load()
# 	for i in range(img.size[0]): # for every col
# 		for j in range(img.size[1]): # for every row
# 			c = arr[random.randrange(len(arr))].lstrip('#')
# 			pixels[i,j] = tuple(int(c[w:w+2],16) for w in (0,2,4))
# 	img.save('../img2/'+fn)

# from shutil import copyfile
# import glob, random
# arr = glob.glob('../img2/*.jpg')
# for i in range(len(arr),86400):
# 	copyfile(arr[random.randint(0,100)],'../img2/'+str(i)+'.jpg')