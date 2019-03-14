## create 86400 images with random colours
# from PIL import Image, ImageDraw
# import randomcolor, numpy
# for i in range(86400):
# 	imarray = numpy.random.rand(480,640,3) * 255
# 	# col = randomcolor.RandomColor()
# 	img = Image.fromarray(imarray.astype('uint8')).convert('RGB')
# 	# img = Image.new('RGB',(640,480),color=col.generate()[0])
# 	fn = str(i) + '.jpg'
# 	img.save('../img/'+fn)



# create 86400 images with random similar-hued pixels
from PIL import Image
import randomcolor, random

col = randomcolor.RandomColor()

for x in range(86400):
	arr = col.generate(hue=col.generate()[0],count=random.randrange(3,10))
	fn = str(x) + '.jpg'
	img = Image.new('RGB',(640,480), "black")
	pixels = img.load()
	for i in range(img.size[0]): # for every col
		for j in range(img.size[1]): # for every row
			c = arr[random.randrange(len(arr))].lstrip('#')
			pixels[i,j] = tuple(int(c[w:w+2],16) for w in (0,2,4))
	img.save('../img2/'+fn)