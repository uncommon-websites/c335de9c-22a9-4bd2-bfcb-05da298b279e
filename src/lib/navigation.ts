/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	/** Optional link target, e.g., '_blank' */
	target?: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "From concept to prototype",
				href: "/use-cases/concept-to-prototype",
				image: "/generated/image-a-group-of-startup-entrepreneurs-engaged.webp",
				description: "Transform your initial idea into a working prototype in days. Skip months of planning and get straight to testing with real users to validate your concept.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Accelerate market entry",
				href: "/use-cases/accelerate-market-entry",
				image: "/generated/image-a-product-team-in-an-office-environment-.webp",
				description: "Beat competitors to market with rapid product development. Launch your product while others are still in the planning phase and capture first-mover advantage.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Build and iterate quickly",
				href: "/use-cases/build-and-iterate-quickly",
				image: "/generated/image-developers-in-a-collaborative-workspace-.webp",
				description: "Ship your first version fast, then improve based on real user feedback. Our rapid development cycles let you evolve your product at market speed.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
