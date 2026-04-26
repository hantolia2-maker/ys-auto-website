from PIL import Image
import numpy as np

# Load image
img = Image.open('public/logo.png').convert('RGBA')
arr = np.array(img)

# Assuming the background is black and the logo is in the center
# and there's a gray border. We can just find the bounding box of non-black/non-gray pixels?
# Actually, the user says "remove the gray box border".
# Let's crop it by 10% on all sides to see if we cut off the border.
width, height = img.size
left = int(width * 0.15)
top = int(height * 0.15)
right = int(width * 0.85)
bottom = int(height * 0.85)

img_cropped = img.crop((left, top, right, bottom))

# Save as transparent png? If background is black, we can convert black to transparent
arr_cropped = np.array(img_cropped)
r, g, b, a = np.rollaxis(arr_cropped, axis=-1)

# Mask black pixels (where r, g, b are all < 30)
mask = (r < 30) & (g < 30) & (b < 30)
arr_cropped[mask, 3] = 0

Image.fromarray(arr_cropped).save('public/logo_fixed.png')
print("Processed logo saved to public/logo_fixed.png")
