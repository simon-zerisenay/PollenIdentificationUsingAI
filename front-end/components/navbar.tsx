import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {Image} from "@nextui-org/image";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";




export const Navbar = () => {
	

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="fixed">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
					<Image
              width={200}
                 alt="NextUI hero Image"
                 src="/logo.png"
               />
						
					</NextLink>
				</NavbarBrand>
				
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full gap-10 "
				justify="end"
			>
				<ul className="hidden lg:flex gap-4 justify-start ml-2 text-4xl font-medium ">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium "
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
				<NavbarItem className="hidden sm:flex gap-5 md:mr-10">
				<Link href='/Login'>
              <button className='border-[0.5px] dark:border-gray-100 border-gray-900 rounded-full py-2 px-5 text-black dark:text-white font-medium'> Log In</button>
              </Link>
              <Link href='/SignUp'>
              <button className='border-[0.5px] dark:border-gray-100 border-gray-900 rounded-full py-2 px-5 text-black dark:text-white font-medium' >Sign Up</button>
              </Link>
					<ThemeSwitch />
				</NavbarItem>
				
				
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
			  
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color="foreground"
								
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
