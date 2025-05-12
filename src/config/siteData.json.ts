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
	// SEO data for main pages
	pages?: {
		home?: {
			seoTitle?: string;
			seoDescription?: string;
			keywords?: string[];
			canonicalUrl?: string;
			noindex?: boolean;
		};
		services?: {
			seoTitle?: string;
			seoDescription?: string;
			keywords?: string[];
			canonicalUrl?: string;
			noindex?: boolean;
		};
		blog?: {
			seoTitle?: string;
			seoDescription?: string;
			keywords?: string[];
			canonicalUrl?: string;
			noindex?: boolean;
		};
		gallery?: {
			seoTitle?: string;
			seoDescription?: string;
			keywords?: string[];
			canonicalUrl?: string;
			noindex?: boolean;
		};
		contact?: {
			seoTitle?: string;
			seoDescription?: string;
			keywords?: string[];
			canonicalUrl?: string;
			noindex?: boolean;
		};
		pricing?: {
			seoTitle?: string;
			seoDescription?: string;
			keywords?: string[];
			canonicalUrl?: string;
			noindex?: boolean;
		};
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
	},

	// SEO data for main pages
	pages: {
		home: {
			seoTitle: "Beauty and Care - Twoje piękno w profesjonalnych rękach | Rzeszów",
			seoDescription: "Zaawansowane zabiegi liftingujące, modelowanie sylwetki i pielęgnacja skóry z wykorzystaniem innowacyjnych technologii w salonie Beauty and Care",
			keywords: ["salon kosmetyczny", "kosmetologia", "zabiegi na twarz", "modelowanie sylwetki", "rzeszów", "kosmetyki", "zabiegi"]
		},
		services: {
			seoTitle: "Profesjonalne Usługi i Zabiegi Kosmetyczne | Beauty and Care Rzeszów",
			seoDescription: "Odkryj pełną ofertę zabiegów kosmetycznych dla twarzy i ciała. Specjalistyczna pielęgnacja, zabiegi liftingujące i modelowanie sylwetki.",
			keywords: ["zabiegi kosmetyczne", "pielęgnacja skóry", "lipoliza", "mezoterapia", "salon kosmetyczny Rzeszów"]
		},
		blog: {
			seoTitle: "Blog o Kosmetologii i Pielęgnacji | Beauty and Care",
			seoDescription: "Praktyczne porady, najnowsze trendy i profesjonalna wiedza z zakresu kosmetologii, pielęgnacji skóry i zdrowia.",
			keywords: ["blog kosmetyczny", "porady kosmetyczne", "pielęgnacja skóry", "trendy w kosmetologii"]
		},
		gallery: {
			seoTitle: "Galeria Zdjęć | Salon Kosmetyczny Beauty and Care",
			seoDescription: "Zobacz efekty naszych zabiegów, wnętrze salonu oraz nasz profesjonalny zespół. Galeria zdjęć Beauty and Care.",
			keywords: ["zdjęcia zabiegów", "salon kosmetyczny", "efekty zabiegów", "przed i po", "beauty and care"]
		},
		contact: {
			seoTitle: "Skontaktuj się z Beauty and Care | Lokalizacja i Godziny Otwarcia",
			seoDescription: "Umów wizytę w salonie Beauty and Care w Rzeszowie. Sprawdź dane kontaktowe, lokalizację i godziny otwarcia.",
			keywords: ["kontakt salon kosmetyczny", "umów wizytę", "salon rzeszów", "godziny otwarcia", "beauty and care"]
		},
		pricing: {
			seoTitle: "Cennik Zabiegów Kosmetycznych | Beauty and Care Rzeszów",
			seoDescription: "Szczegółowy cennik wszystkich zabiegów kosmetycznych. Przystępne ceny, profesjonalne usługi i najwyższa jakość.",
			keywords: ["cennik zabiegów", "koszt zabiegów kosmetycznych", "zabiegi na twarz cena", "modelowanie sylwetki cennik"]
		}
	}
};

export default siteData;
