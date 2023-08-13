'use client'

import NextLink from "next/link";
import { usePathname } from 'next/navigation';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
} from "@/components/icons";


export const Navbar = () => {
	const pathname = usePathname()

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent backdrop-saturate-2000">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem isActive={pathname === item.href} key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "secondary" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

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
