/**
 * Normalizes an image path based on different input formats
 *
 * @param src The source image path
 * @returns Normalized path for use in the application
 */
export function normalizeImagePath(src: string): string {
	if (!src) return "";

	// If it starts with /assets/images/, use the new path structure from src/assets/images
	if (src.startsWith("/assets/images/")) {
		// We need to dynamically import these images
		const filename = getFilenameFromPath(src);
		return `/assets/images/${filename}`;
	}
	// If it doesn't include a path separator, assume it's in the images directory
	else if (!src.includes("/")) {
		return `/assets/images/${src}`;
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

	// Remove leading slashes (handle cases like //filename.jpg)
	const cleanPath = path.replace(/^\/+/, "");

	// If it's a full path, extract just the filename
	if (cleanPath.includes("/")) {
		const parts = cleanPath.split("/");
		return parts[parts.length - 1];
	}

	// Otherwise return as is
	return cleanPath;
}
