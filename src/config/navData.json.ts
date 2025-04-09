export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Strona główna",
		link: "/",
	},
	{
		text: "Usługi",
		link: "/uslugi",
	},
	{
		text: "Cennik",
		link: "/cennik",
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "Galeria",
		dropdown: [
			{
				text: "Zabiegi",
				link: "/uslugi/modelowanie-sylwetki",
			},
			{
				text: "Regulamin",
				link: "/privacy-policy/",
			},
		],
	},
	{
		text: "Kontakt",
		link: "/kontakt",
	},
];

export default navConfig;
