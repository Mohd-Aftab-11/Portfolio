import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "React",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",

      className: "h-10 w-24",
    },

    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },

    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },

    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },

    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-24",
    },

    {
      title: "SpringBoot",
      src: "/images/logos/boot.png",

      className: "h-10 w-24",
    },

    {
      title: "Github",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png",

      className: "h-10 w-24",
    },

    {
      title: "Html",
      src: "/images/logos/html.png",

      className: "h-10 w-24",
    },

    {
      title: "js",
      src: "/images/logos/js.png",

      className: "h-10 w-24",
    },
    
    {
      title: "Sql",
      src: "/images/logos/sql.png",

      className: "h-10 w-24",
    },

    {
      title: "mongo",
      src: "/images/logos/mongo.png",

      className: "h-10 w-24",
    },

    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
