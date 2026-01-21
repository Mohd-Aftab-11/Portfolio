import numbergame from "public/images/numbergame.png";
import portfolio from "public/images/portfolio.png";
import portfolioabout from "public/images/portfolioabout.png";
import portfoliocontact from "public/images/portfoliocontact.png";

export const products = [
  {
    href: "https://personal-portfolio-next-js-alpha.vercel.app/",
    title: "Personal Portfolio",
    description: "Build on the following technologies:",
    thumbnail: portfolio,
    images: [portfolio, portfolioabout, portfoliocontact],
    stack: ["Next.js", "React.js", "Appwrite", "Tailwind"],
    slug: "portfolio",
    content: (
      <div>
        <p>
          Personal portfolio website built with Next.js, React.js, Appwrite, and
          Tailwind, in order to showcase my knowledge, qualifications and
          projects.
        </p>
      </div>
    ),
  },

  {
    href: "https://guess-my-number-two-tau.vercel.app/",
    title: "Number Game",
    description: "Build on the following technologies:",
    thumbnail: numbergame,
    images: [numbergame],
    stack: ["HTML", "CSS", "JavaScript"],
    slug: "numbergame",
    content: (
      <div>
        <p>
          This is just a fun project which I built in order to practice my
          skills like HTML, CSS, Javascript, and DOM manipulation.
        </p>
      </div>
    ),
  },
];
