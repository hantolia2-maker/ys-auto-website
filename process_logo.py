from PIL import Image

# Open the image
img = Image.open('public/logo.jpg').convert("RGBA")
datas = img.getdata()

newData = []
# The background is dark gray/black. Let's make everything darker than (50, 50, 60) transparent.
# To be safe, we will just make the top-left pixel color the transparent color, with a tolerance.
bg_color = datas[0]
tolerance = 40

for item in datas:
    if abs(item[0] - bg_color[0]) < tolerance and \
       abs(item[1] - bg_color[1]) < tolerance and \
       abs(item[2] - bg_color[2]) < tolerance:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)

# Now crop the image to its bounding box of non-transparent pixels
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Save the new image
img.save('public/logo.png', "PNG")
print("Successfully processed logo and saved as public/logo.png!")
