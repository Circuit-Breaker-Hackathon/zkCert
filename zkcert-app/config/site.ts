export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ZKCert",
	description: "Report scientific erros anonymously with ease.",
	navItems: [
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
			label: "About",
			href: "/about",
		},
		{
			label: "Contribute",
			href: "/contribute",
		},
		
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
