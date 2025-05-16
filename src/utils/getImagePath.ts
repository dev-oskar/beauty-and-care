/**
 * Normalizes an image path based on different input formats
 * 
 * @param src The source image path
 * @returns Normalized path for use in the application
 */
export function normalizeImagePath(src: string): string {
	if (!src) return "";
	
	// If it starts with /assets/images/, adjust the path
	if (src.startsWith("/assets/images/")) {
		return `/public${src}`;
	} 
	// If it doesn't include a path separator, assume it's in the images directory
	else if (!src.includes("/")) {
		return `/public/assets/images/${src}`;
	}
	
	// Return as is if it's already a valid path
	return src;
}

/**
 * Extracts just the filename from a path
 * 
 * @param path The full path
 * @returns Just the filename
 */
export function getFilenameFromPath(path: string): string {
	if (!path) return "";
	
	// If it's a full path, extract just the filename
	if (path.includes("/")) {
		const parts = path.split("/");
		return parts[parts.length - 1];
	}
	
	// Otherwise return as is
	return path;
}

/**
 * Gets a responsive image path for different screen sizes
 * 
 * @param src The source image path
 * @param size The desired size ('sm', 'md', 'lg', 'xl')
 * @returns Optimized image path for the requested size
 */
export function getResponsiveImagePath(src: string, size: "sm" | "md" | "lg" | "xl" = "md"): string {
	// Default sizes in pixels
	const sizes = {
		sm: 400,
		md: 800,
		lg: 1200,
		xl: 1600
	};
	
	const width = sizes[size];
	
	// For dynamic imports
	return normalizeImagePath(src);
}