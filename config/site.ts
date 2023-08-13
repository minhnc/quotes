export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Preloading",
			href: "/patterns/preload",
		},
		{
			label: "Parallel",
			href: "/patterns/parallel",
		},
		{
			label: "Sequential",
			href: "/patterns/sequential",
		},
	],
	navMenuItems: [],
	links: {
		github: "https://github.com/minhnc/quotes",
		docs: "https://dev.to/minhnc",
	},
};
