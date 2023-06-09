import Link from "next/link";
import React from "react";
import IconButton from "../common/IconButton";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  SunIcon,
  MoonIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import classNames from "classnames";
// import "@radix-ui/react-dropdown-menu/dist/";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b dark:border-gray-800 backdrop-blur-md">
        <ul className="container flex flex-row items-center w-full px-5 space-x-5 laptop:px-24">
          <li className="py-4">
            <Link href={"/"}>Usman Hassan</Link>
          </li>
          <li className="flex-grow" />
          {links.map((link, index) => (
            <li key={index} className="relative hidden py-4 group laptop:block">
              <Link href={link.link}>{link.name}</Link>
              <div
                className={`h-[2px] mt-2 mx-auto transition-all duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full ${
                  router.pathname === "/" && link.link === "/"
                    ? "!w-full opacity-100 bg-primary dark:bg-primary"
                    : link.link !== "/" && router.pathname.startsWith(link.link)
                    ? "!w-full opacity-100 bg-primary dark:bg-primary"
                    : "w-1 opacity-0 dark:bg-white bg-gray-950"
                }`}
              />
            </li>
          ))}
          <li className="laptop:hidden">
            <MenuButton />
          </li>
          <li className="hidden laptop:block">
            <IconButton size="sm" onClick={toggleTheme}>
              {theme === "dark" ? (
                <SunIcon className="dark:text-white text-gray-950" />
              ) : (
                <MoonIcon className="dark:text-white text-gray-950" />
              )}
            </IconButton>
          </li>
        </ul>
      </nav>
      <div className="h-16" />
    </>
  );
};

export default Navbar;

const MenuButton = ({
  state = false,
  toggle: Toggle,
}: {
  state?: boolean;
  toggle?: (state: boolean) => void;
}) => {
  const [open, setOpen] = React.useState(state);

  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // const toggle = React.useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div className="relative inline-block text-left">
      <DropdownMenu.Root open={open} onOpenChange={(open) => setOpen(open)}>
        <DropdownMenu.Trigger asChild className="border-none outline-none">
          <IconButton size="sm" mode="text">
            {open ? (
              <Cross1Icon
                className={`dark:text-white text-gray-950 transition-all duration-300 ease-in-out ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <HamburgerMenuIcon
                className={`dark:text-white text-gray-950 transition-all duration-300 ease-in-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            sideOffset={5}
            className={classNames(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down z-[999] relative",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white dark:bg-gray-900"
            )}
          >
            {links.map((link, index) => (
              <DropdownMenu.Item
                key={index}
                className={classNames(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "focus:bg-gray-50 dark:focus:bg-gray-950",
                  `${
                    router.pathname === "/" && link.link === "/"
                      ? "bg-primary dark:text-white"
                      : link.link !== "/" &&
                        router.pathname.startsWith(link.link)
                      ? "bg-primary dark:text-white"
                      : "dark:text-gray-50 text-gray-950"
                  }`
                )}
              >
                <Link href={link.link} className="flex items-center w-full">
                  <span className="flex-grow ">{link.name}</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Item
              onClick={toggleTheme}
              className={classNames(
                "flex  cursor-pointer select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                "focus:bg-gray-50 dark:focus:bg-gray-950 dark:text-gray-50 text-gray-950"
              )}
            >
              <div className="flex items-center w-full">
                <span className="flex-grow ">
                  {theme === "light" ? "Dark" : "Light"} Mode
                </span>

                {theme === "dark" ? (
                  <SunIcon className="dark:text-white text-gray-950" />
                ) : (
                  <MoonIcon className="dark:text-white text-gray-950" />
                )}
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
