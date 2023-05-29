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
          {/* {hash} */}
          <li className="laptop:hidden">
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
  );
};
