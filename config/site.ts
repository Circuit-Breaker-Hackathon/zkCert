export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ZKCert",
	description: "Report scientific erros anonymously with ease.",
	navItems: [
		{
			label: "Papers",
			href: "/papers",
		},
		{
			label: "About",
			href: "/about",
		},
    {
      label: "Contribute",
      href: "/contribute",
    },
    
	],
	navMenuItems: [
		{
			label: "Papers",
			href: "/papers",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Contribute",
			href: "/contribute",
		},
		
	],
	links: {
		github: "https://github.com/DeSciDegen/zkCert",
	
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
