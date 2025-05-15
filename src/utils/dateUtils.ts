/**
 * Date utility functions for formatting dates consistently across the application
 */

/**
 * Formats a date in the Polish locale with numeric year and 2-digit month and day
 * @param date Date to format (Date object or date string)
 * @returns Formatted date string or empty string if date is falsy
 */
export const formatDate = (date: Date | string | null | undefined): string => {
	if (!date) return "";
	return new Date(date).toLocaleDateString("pl-PL", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
};

/**
 * Formats a date in the Polish locale with numeric year, long month name, and numeric day
 * @param date Date to format (Date object or date string)
 * @returns Formatted date string or empty string if date is falsy
 */
export const formatDateLong = (date: Date | string | null | undefined): string => {
	if (!date) return "";
	return new Date(date).toLocaleDateString("pl-PL", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};