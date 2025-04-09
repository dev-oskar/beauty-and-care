export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
	social?: {
		facebook?: string;
		instagram?: string;
		twitter?: string;
		youtube?: string;
	};
	business?: {
		address: string;
		city: string;
		postalCode: string;
		country: string;
		phone: string;
		email: string;
		priceRange: string;
		openingHours: Array<{
			days: string;
			hours: string;
		}>;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Beauty and Care",
	// Your website's title and description (meta fields)
	title: "Beauty and Care - Twoje piękno w profesjonalnych rękach",
	description:
		"Zaawansowane zabiegi liftingujące, modelowanie sylwetki i pielęgnacja skóry z wykorzystaniem innowacyjnych technologii",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Beauty and Care Team",
		email: "kontakt@beautyandcare.pl",
		twitter: "BeautyAndCarePL",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Beauty and Care logo",
	},
	
	// Social media profiles
	social: {
		facebook: "https://facebook.com/beautyandcarepl",
		instagram: "https://instagram.com/beautyandcarepl",
		twitter: "https://twitter.com/BeautyAndCarePL",
		youtube: "https://youtube.com/channel/beautyandcarepl"
	},
	
	// Business information
	business: {
		address: "Fryderyka Szopena 33",
		city: "Rzeszów",
		postalCode: "33-055",
		country: "PL",
		phone: "+48 123 456 789",
		email: "kontakt@beautyandcare.pl",
		priceRange: "$$",
		openingHours: [
			{ days: "Poniedziałek - Piątek", hours: "10:00 - 20:00" },
			{ days: "Sobota", hours: "10:00 - 16:00" },
			{ days: "Niedziela", hours: "Zamknięte" }
		]
	}
};

export default siteData;
