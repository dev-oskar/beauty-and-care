/**
 * Utility functions for handling images in Astro
 */

import { getFilenameFromPath } from './getImagePath';

// Define an interface for the image module
interface ImageModule {
  default: ImageMetadata;
}

// Create a dynamic image import function that works with Astro's Image component
export async function getImageModule(path: string): Promise<ImageMetadata | null> {
  try {
    // If the path is null or undefined, return null
    if (!path) return null;
    
    // Extract the filename from the path
    const filename = getFilenameFromPath(path);
    
    // Handle different path formats that might come from TinaCMS
    // For paths from TinaCMS like "/assets/images/filename.jpg"
    if (path.startsWith('/assets/images/')) {
      // Try to import from src/assets/images directory
      try {
        const imageModule = await import(`../assets/images/${filename}`) as ImageModule;
        return imageModule.default;
      } catch (e) {
        console.error(`Error importing image ${filename} from src/assets/images:`, e);
        return null;
      }
    }
    
    // For other paths, try direct import
    try {
      const imageModule = await import(`../assets/images/${filename}`) as ImageModule;
      return imageModule.default;
    } catch (e) {
      console.error(`Error importing image ${filename}:`, e);
      return null;
    }
  } catch (e) {
    console.error('Error in getImageModule:', e);
    return null;
  }
}

// Function to get a list of all available images
export const availableImages: Record<string, ImageMetadata> = {};

// Populate available images (must be done manually due to Vite's import.meta.glob limitations)
try {
  const importAllImages = async () => {
    const modules = import.meta.glob('../assets/images/*.(png|jpg|jpeg|gif|svg|webp)');
    
    for (const path in modules) {
      const filename = path.split('/').pop() || '';
      try {
        const imageModule = await modules[path]() as { default: ImageMetadata };
        availableImages[filename] = imageModule.default;
      } catch (e) {
        console.error(`Error loading image: ${path}`, e);
      }
    }
  };
  
  // Immediately call the function to populate the available images
  importAllImages();
} catch (e) {
  console.error('Error populating available images:', e);
}

// Get an image by filename
export function getImageByFilename(filename: string): ImageMetadata | null {
  return availableImages[filename] || null;
}