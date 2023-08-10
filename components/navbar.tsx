import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";


import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
} from "@/components/icons";


export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent backdrop-saturate-2000">
			<NavbarContent
				className="sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="sm:flex gap-2">
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};
