import React from "react";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import useSWR from "swr";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const socials = [
  {
    name: "Twitter",
    icon: <TwitterLogoIcon className="w-5 h-5" />,
    link: "https://twitter.com/usmangurowa",
  },
  {
    name: "Github",
    icon: <GitHubLogoIcon className="w-5 h-5" />,
    link: "https://github.com/usmangurowa",
  },
  {
    name: "Instagram",
    icon: <InstagramLogoIcon className="w-5 h-5" />,
    link: "https://instagram.com/usmangurowa",
  },
];

const Main = () => {
  return (
    <main
      className={`${poppins.className} container max-w-4xl py-5 mx-auto flex flex-col laptop:flex-row items-center gap-10 h-fit overflow-hidden`}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative w-40 h-40 border rounded-full shadow-lg shadow-black animate-pulse hover:animate-spin"
      >
        <Image
          src={require("../public/me.jpg")}
          fill
          alt="Profile"
          className="rounded-full"
        />
      </motion.div>
      <div className="flex-1 space-y-2 text-center laptop:text-left">
        <Balancer>
          <h1
            title="Full Stack Developer"
            className="text-xl font-bold dark:text-white tablet:text-2xl laptop:text-3xl animate-fade-up duration-900"
          >
            Usman Hassan
          </h1>
        </Balancer>
        <div className="flex flex-row items-center justify-center space-x-4 text-lg duration-700 animate-fade-up laptop:justify-start">
          {socials.map((social, index) => (
            <Link target="_blank" title={social.name} href={social.link}>
              {social.icon}
            </Link>
          ))}
        </div>
        <Balancer>
          <p className="text-sm duration-1000 animate-fade-up">
            I am a full stack developer with 3 years of experience in web and
            mobile development. I have worked on many projects and have a good
            understanding of the technologies i use.
          </p>
        </Balancer>
        <div className="flex flex-row items-center justify-center space-x-2 laptop:justify-start">
          <Button
            rounded="full"
            className="w-40 text-sm font-semibold text-gray-950"
          >
            Projects
          </Button>
          <Button
            rounded="full"
            mode="outline"
            className="w-40 text-sm font-semibold !text-gray-950 dark:!text-white"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <Projects />
    </main>
  );
};

export default Main;

// const projects = []

const Projects = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `https://api.github.com/users/usmangurowa/repos`
  );

  console.log({ data, error });

  return <div></div>;
};
