import { Container } from "@/components/Container";
import { Educations } from "@/components/Education";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Mohd Aftab
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves
        <Highlight>building products</Highlight> and web apps that have impact
        on users.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software engineer with
        experience in building scalable web
        apps that are performance optimized and good looking and{" "}
        <Highlight> of experience</Highlight> in making responsive web applications.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Glimpse of my Qualifications
      </Heading>
      <Educations />

      <TechStack />
    </Container>
  );
}
