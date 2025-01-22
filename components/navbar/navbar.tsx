import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Navbar1  from "@/components/navbar/NavbarMenuTogglee";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import styles from './navbar.module.css';

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch/theme-switch";
import {  
  SearchIcon,  
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      
      className="dark:border-none border rounded-full max-w-[85%] flex justify-between items-center mx-auto mt-3 bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white/10"
    >
      <NavbarContent className="flex items-center sm:basis-full justify-start pl-4 sm:pl-0">
        {/* Toggle para telas pequenas */}
        <NavbarMenuToggle className="sm:hidden" />

        {/* Ícone SVG e Marca */}
        <div className="flex items-center gap-1">
          <svg
            className="h-9 w-9"
            height="36"
            viewBox="0 2 34 32"
          >
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Navbar1 />
        </div>

        {/* ThemeSwitch para telas pequenas */}
        <div className="sm:hidden absolute top-[55%] right-[10%] transform -translate-y-1/2">
          <ThemeSwitch className="theme-switch" />

        </div>
      </NavbarContent>




      <NavbarContent
   className="custom-container hidden md:flex gap-14 justify-end items-center ml-2 lg:justify-end lg:items-center lg:ml-auto text-sm md:text-base lg:text-lg" style={{ flexWrap: "nowrap", justifyContent: "flex-end" }}

>
  {siteConfig.navItems.map((item) => (
    <NavbarItem key={item.href} style={{ flexShrink: 0 }}>
      <NextLink
        className={clsx(
          linkStyles({ color: "foreground" }),
          "font-sans",
          "data-[active=true]:text-slate-950 data-[active=true]:font-medium",
          "font-bold"
        )}
        color="foreground"
        href={item.href}
      >
        {item.label}
      </NextLink>
    </NavbarItem>
  ))}
  <NavbarItem style={{ flexShrink: 0 }}>
    <ThemeSwitch />
  </NavbarItem>
</NavbarContent>





      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-2">
          {searchInput}
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="ml-2">
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
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
