# Image Management Workflow for Beauty and Care

This guide explains how to manage images in your Beauty and Care website using Tina CMS.

## How Image Management Works

1. **Where Images Are Stored**: All images are stored in the `/src/assets/images/` directory
2. **How They're Referenced**: The gallery configuration in `src/content/gallery/main-gallery.md` references these images by filename

## Adding New Images to the Gallery

### Step 1: Upload Images via Tina CMS

1. Log into the Tina CMS admin panel at `/admin`
2. Click on "Media" in the sidebar to access the media manager
3. Click "Upload" to add new images
4. The images will be automatically stored in the correct location (`src/assets/images/`)

### Step 2: Add Images to Gallery

1. Navigate to "Galeria zdjęć" in the Tina CMS sidebar
2. Edit the gallery (main-gallery.md)
3. In the "Zdjęcia w galerii" section, click "Add Zdjęcie" to add a new image
4. Select your uploaded image from the media picker
5. Add a caption and alt text for the image
6. Save changes

### Step 3: Build and Deploy

After making changes:
1. Build the site to apply your changes
2. Deploy the updated site to see the new images in the gallery

## Troubleshooting

If your images don't appear in the gallery:

1. **Check Image Path**: Make sure images are stored in `src/assets/images/`
2. **Check Image References**: In the gallery configuration, images should be referenced by filename only (e.g., "my-image.jpg"), not full path
3. **Verify Image Format**: Use supported image formats (JPG, PNG, WebP, GIF)
4. **Rebuild the Site**: Make sure to rebuild the site after adding new images

## Best Practices

1. **Image Optimization**: Optimize images before uploading for better performance
2. **Consistent Naming**: Use a consistent naming convention for your images
3. **Descriptive Alt Text**: Always provide descriptive alt text for accessibility
4. **Meaningful Captions**: Use captions that describe the image content for better user experience

## Need Help?

If you encounter issues with image management, please contact your website administrator for assistance.