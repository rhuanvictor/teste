"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Navbar1 from "@/components/navbar/NavbarMenuTogglee";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import styles from "./navbar.module.css";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch/theme-switch";
import { SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // This useEffect ensures the theme is set immediately when the component mounts.
  useEffect(() => {
    const finalTheme = theme ?? systemTheme ?? "light";
    setResolvedTheme(finalTheme);
  }, [theme, systemTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply background style dynamically based on resolved theme
  const navbarBg = resolvedTheme === "dark"
    ? "linear-gradient(to right, #3f3d3a, #322b25, #140f0b)"
    : "linear-gradient(to right, #f3f2f1, #eceae8, #d7d4d1)";

  const navbarStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    background: navbarBg,
    boxShadow: "0 1px 10px rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    borderBottom:
      resolvedTheme === "dark"
        ? "1px solid rgba(255, 255, 255, 0.05)"
        : "1px solid rgba(0, 0, 0, 0.1)",
  };

  if (resolvedTheme === null) {
    return null; // Wait for the theme to be resolved before rendering
  }

  return (
    <NextUINavbar
      className="fixed top-0 left-0 w-full transition-transform duration-300 z-50 border-none"
      style={navbarStyle}
    >
      <NavbarContent className="flex items-center sm:basis-full justify-start pl-4 sm:pl-0">
        <NavbarMenuToggle className="sm:hidden" />
        <div className="flex items-center gap-1">
          <svg className="h-9 w-9" height="36" viewBox="0 2 34 32">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Navbar1 />
        </div>
        <div className="sm:hidden absolute top-[55%] right-[10%] transform -translate-y-1/2">
          <ThemeSwitch className="theme-switch" />
        </div>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-14 justify-end items-center ml-2 lg:justify-end lg:items-center lg:ml-auto text-sm md:text-base lg:text-lg">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "font-sans font-bold data-[active=true]:text-slate-950 data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-4 flex flex-col gap-2">
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
