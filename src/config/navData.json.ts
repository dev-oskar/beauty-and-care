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
		link: "/portfolio",
	},
	{
		text: "Cennik",
		link: "/#pricing",
	},
	{
		text: "Galeria",
		dropdown: [
			{
				text: "Portfolio",
				link: "/portfolio/couple-1",
			},
			{
				text: "Legal",
				link: "/privacy-policy/",
			},
			{
				text: "Elements",
				link: "/elements/",
			},
			{
				text: "404",
				link: "/not-a-link/",
			},
		],
	},
];

export default navConfig;
