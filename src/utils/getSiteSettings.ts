import { getCollection } from "astro:content";

// Define the type for site settings
export interface SiteSettings {
	title: string;
	business: {
		address: string;
		city: string;
		postalCode: string;
		country: string;
		phone: string;
		email: string;
	};
	openingHours: Array<{
		days: string;
		hours: string;
	}>;
	social: {
		facebook?: string;
		instagram?: string;
		twitter?: string;
		youtube?: string;
	};
	about?: {
		title?: string;
		content?: string;
		signature?: string;
		aboutImage?: string;
	};
	beforeAfter?: {
		title?: string;
		description?: string;
		beforeImage: string;
		beforeCaption?: string;
		afterImage: string;
		afterCaption?: string;
	};
}

// Default site settings (fallback if CMS data not available)
export const defaultSiteSettings: SiteSettings = {
	title: "Ustawienia strony",
	business: {
		address: "Fryderyka Szopena 33",
		city: "Rzeszów",
		postalCode: "33-055",
		country: "PL",
		phone: "+48 123 456 789",
		email: "kontakt@beautyandcare.pl",
	},
	openingHours: [
		{ days: "Poniedziałek - Piątek", hours: "10:00 - 20:00" },
		{ days: "Sobota", hours: "10:00 - 16:00" },
		{ days: "Niedziela", hours: "Zamknięte" },
	],
	social: {
		facebook: "https://facebook.com/beautyandcarepl",
		instagram: "https://instagram.com/beautyandcarepl",
		twitter: "https://twitter.com/BeautyAndCarePL",
		youtube: "https://youtube.com/channel/beautyandcarepl",
	},
	about: {
		title: "O naszym salonie",
		content:
			"Nasz salon specjalizuje się w innowacyjnych zabiegach kosmetycznych z wykorzystaniem najnowszych technologii. Oferujemy kompleksowe usługi z zakresu liftingu bez skalpela, terapii bioelektrycznej oraz modelowania sylwetki. Każdy zabieg przeprowadzany jest przez certyfikowanych specjalistów, którzy indywidualnie dopasowują metody do potrzeb i oczekiwań klienta.",
		signature: "Zespół Beauty and Care",
		aboutImage: "/assets/images/2.jpg",
	},
	beforeAfter: {
		title: "Przed i po",
		description:
			"Zobacz efekty naszych zabiegów na zdjęciach przed i po. Nasze innowacyjne metody przynoszą widoczne rezultaty już po pierwszej wizycie.",
		beforeImage: "/assets/images/1.jpg",
		beforeCaption: "Przed zabiegiem",
		afterImage: "/assets/images/2.jpg",
		afterCaption: "Po zabiegu",
	},
};

// Get site settings from collection
export async function getSiteSettings(): Promise<SiteSettings> {
	try {
		// Get the settings collection
		const settingsCollection = await getCollection("settings");

		// If no settings are found, return the default
		if (!settingsCollection || settingsCollection.length === 0) {
			console.warn("No site settings found, using defaults");
			return defaultSiteSettings;
		}

		// Get the first settings entry (we should only have one)
		const settingsEntry = settingsCollection[0];

		// Return the data including beforeAfter
		return {
			title: settingsEntry.data.title,
			business: settingsEntry.data.business,
			openingHours: settingsEntry.data.openingHours,
			social: settingsEntry.data.social,
			about: settingsEntry.data.about,
			beforeAfter: settingsEntry.data.beforeAfter,
		};
	} catch (error) {
		console.error("Error loading site settings:", error);
		return defaultSiteSettings;
	}
}
