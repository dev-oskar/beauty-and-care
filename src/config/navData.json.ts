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
		text: "Zabiegi",
		link: "/zabiegi",
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
		link: "/galeria",
	},
	{
		text: "Kontakt",
		link: "/kontakt",
	},
];

export default navConfig;
