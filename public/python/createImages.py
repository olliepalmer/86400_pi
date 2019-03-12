# create 86400 images with random colours

from PIL import Image, ImageDraw
import randomcolor
for i in range(86400):
	col = randomcolor.RandomColor()
	img = Image.new('RGB',(640,320),color=col.generate()[0])
	fn = str(i) + '.jpg'
	img.save('../img/'+fn)