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
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Beauty and care",
	// Your website's title and description (meta fields)
	title: "Beauty and care - Twoje piękno w profesjonalnych rękach",
	description:
		"Zaawansowane zabiegi liftingujące, modelowanie sylwetki i pielęgnacja skóry z wykorzystaniem innowacyjnych technologii",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Oskar Pietrucha",
		email: "oskar.pietrucha@gmail.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
