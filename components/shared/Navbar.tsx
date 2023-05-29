import Link from "next/link";
import React from "react";
import IconButton from "../common/IconButton";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  SunIcon,
  MoonIcon,
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
    link: "#projects",
  },
  {
    name: "Blog",
    link: "#blog",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const router = useRouter();

  const hash = React.useMemo(
    () => router.asPath.split("#")[1],
    [router.asPath]
  );

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
                className={`h-[2px] mt-2 mx-auto transition-all duration-300 ease-in-out dark:bg-white bg-gray-950 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full ${
                  hash === link.link ? "!w-full opacity-100" : "w-1 opacity-0"
                }`}
              />
            </li>
          ))}
          {/* <li className="laptop:hidden"> */}
          <li>
            <MenuButton />
          </li>
          <li>
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

  const toggle = React.useCallback(() => setOpen((prev) => !prev), [open]);

  return (
    <div className="relative inline-block text-left">
      <DropdownMenu.Root open={open} onOpenChange={(open) => setOpen(open)}>
        <DropdownMenu.Trigger asChild>
          <IconButton onClick={toggle} size="sm" mode="text">
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
            side="top"
            align="start"
            sideOffset={50}
            className={classNames(
              "bg-white radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white dark:bg-gray-800"
            )}
            sticky="always"
          >
            <DropdownMenu.Item
              className={classNames(
                "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
              )}
            >
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="DropdownMenuItem">
              New Tab <div className="RightSlot">⌘+T</div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};
