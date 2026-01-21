import { StaticImageData } from "next/image";

export type Education = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  href: string;
  stack?: string[];
};
