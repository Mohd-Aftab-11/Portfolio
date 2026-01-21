import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mohd Aftab",
  description: "Mohd Aftab is a developer, and able to interesting web apps.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
