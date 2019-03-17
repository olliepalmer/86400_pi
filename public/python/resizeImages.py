from PIL import Image
import os, sys

path = "/Users/o/Documents/github-root/86400_pi/public/img_320/"
dirs = os.listdir( path )

def resize_aspect_fit():
	for item in dirs:
		if item == '.DS_Store':
			continue
		if os.path.isfile(path+item):
			image = Image.open(item)
			image.thumbnail([320,240], Image.ANTIALIAS)
			image.save(item, "JPEG")
			print(item)
resize_aspect_fit()
