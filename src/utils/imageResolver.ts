const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/*", {
	eager: true,
});

export function resolveImage(imagePath: string): ImageMetadata | null {
	if (!imagePath) return null;

	// Get just the filename
	const filename = imagePath.split("/").pop() || imagePath;

	// Try to find it in our imported images
	const fullPath = `/src/assets/images/${filename}`;

	console.log(`Resolving image: ${fullPath}`); // Debugging line
	return images[fullPath]?.default || null;
}
