import React from "react";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import { FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiFastify,
  SiPostgresql,
  SiNestjs,
  SiExpress,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
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
    name: "Mail",
    icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    link: "mailto:usmanhassangu@gmail.com",
  },
];

// array of 100 random colors
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

const tools = [
  {
    name: "ReactJS",
    icon: SiReact,
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "React Native",
    icon: SiReact,
  },
  {
    name: "NodeJS",
    icon: FaNodeJs,
  },
  {
    name: "ExpressJS",
    icon: SiExpress,
  },
  {
    name: "Fastify",
    icon: SiFastify,
  },
  {
    name: "NestJS",
    icon: SiNestjs,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
];

const Main = () => {
  return (
    <>
      <main
        className={`${poppins.className} container max-w-4xl mx-auto space-y-5`}
      >
        <div className="flex flex-col items-center w-full gap-10 p-5 overflow-hidden laptop:flex-row h-fit">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative w-40 h-40 border rounded-full shadow-md shadow-gray-800 "
          >
            <Image
              src={require("../public/me.jpg")}
              fill
              alt="Profile"
              className="rounded-full"
            />
          </motion.div>
          <div className="flex-1 space-y-2 text-center laptop:text-left">
            <h1
              title="Full Stack Developer"
              className="text-xl font-bold dark:text-white tablet:text-2xl laptop:text-3xl animate-fade-up duration-900"
            >
              <Balancer>Usman Hassan</Balancer>
            </h1>
            <div className="flex flex-row items-center justify-center space-x-4 text-lg duration-700 animate-fade-up laptop:justify-start">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  target="_blank"
                  title={social.name}
                  href={social.link}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <p className="text-sm duration-1000 animate-fade-up">
              <Balancer>
                Full stack developer with over 3 years of experience in web and
                mobile development.
              </Balancer>
            </p>
            <div className="flex flex-row items-center justify-center space-x-2 laptop:justify-start">
              <Button
                size="sm"
                rounded="full"
                className="w-40 text-sm font-semibold text-gray-950"
              >
                Projects
              </Button>
              <Button
                size="sm"
                rounded="full"
                mode="outline"
                className="w-40 text-sm font-semibold !text-gray-950 dark:!text-white"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">
            <Balancer>More About Me</Balancer>
          </h1>
          <p>
            Hi 👋🏿! {"I'm"} Usman Hassan, a software developer with over 3 years
            of experience. I specialize in building dynamic websites and mobile
            applications using React, Next.js, React Native, and Expo.
          </p>
          <p>
            I also build backend services with tools and frameworks like
            Express, fastify and Nestjs.
          </p>
          <p>
            I have a genuine passion for building things and being part of
            amazing products and communities. I also love exploring new
            technologies and sharing what i have learn with friends or random
            strangers on the internet.
          </p>
          <p>
            If {"you're"} seeking a dedicated developer to transform your vision
            into reality, {"let's"} connect and create something remarkable
            together!
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-lg font-semibold">
            <Balancer>Tools</Balancer>
          </h1>
          <p>Here are the list of Languages, Frameworks and Tools i use.</p>
          <div className="grid grid-cols-2 gap-10 tablet:grid-cols-3 laptop:grid-cols-4">
            {tools.map((tool, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-center  p-2 space-x-2 rounded-full cursor-pointer whitespace-nowrap`}
                >
                  <tool.icon size={30} className="z-50" />
                  <span className="z-50">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <div></div>
    </>
  );
};

export default Main;

// const projects = []

const Projects = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `https://api.github.com/users/usmangurowa/repos`
  );

  // console.log({ data, error });

  return <div className="grid w-full laptop:grid-cols-3"></div>;
};

// const ProjectCard = ({ project }) => { }
