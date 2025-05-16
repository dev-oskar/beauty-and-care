/**
 * Utility functions for working with images
 */

// Import necessary functions
import { getImage } from "astro:assets";

// Import all images from the images directory
// This creates a record where the keys are the image paths and the values are the imported images
const imageModules = import.meta.glob("/public/assets/images/**/*.{jpeg,jpg,png,gif,webp}");

/**
 * Resolves an image path to an actual image import
 * This is useful when you have an image path in your content files but need the actual import for Astro's Image component
 * 
 * @param imagePath - The path to the image, either absolute or relative to the assets directory
 * @returns The imported image object
 */
export async function resolveImage(imagePath: string) {
  // Normalize the path to ensure it starts with /public/assets/
  let normalizedPath = imagePath;

  // If the path is a relative path, prepend the assets directory
  if (!normalizedPath.startsWith("/")) {
    normalizedPath = `/public/assets/${normalizedPath}`;
  }

  // If the path already starts with /assets or /public/assets, make sure it's properly formatted
  if (!normalizedPath.startsWith("/public/assets/")) {
    normalizedPath = `/public/assets/${normalizedPath.replace(/^\/*(public\/)*assets\/*/g, "")}`;
  }

  // Find the matching image module
  const importedImage = imageModules[normalizedPath];

  // If the image module exists, import it
  if (importedImage) {
    return importedImage().then(module => module.default);
  }

  // If we can't find it, log an error
  console.error(`Could not find image: ${normalizedPath}`);
  throw new Error(`Could not find image: ${imagePath} (normalized to ${normalizedPath})`);
}

/**
 * Formats text by capitalizing the first letter of each word
 * Used for image captions or alt text
 * 
 * @param text - The text to format
 * @returns The formatted text
 */
export function formatCaption(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}