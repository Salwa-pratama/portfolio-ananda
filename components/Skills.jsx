import { memo } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import avatarImg from "@/public/assets/Skills/m.png";

const people = [
  {
    id: 1,
    name: "Express",
    designation: "Software Engineer",
    image: "/assets/Skills/e.png",
  },
  {
    id: 2,
    name: "Mongo DB",
    designation: "Product Manager",
    image: "/assets/Skills/m.png",
  },
  {
    id: 3,
    name: "NextJS",
    designation: "Data Scientist",
    image: "/assets/Skills/next.png",
  },
  {
    id: 4,
    name: "Python",
    designation: "UX Designer",
    image: "/assets/Skills/p.png",
  },
  {
    id: 5,
    name: "React",
    designation: "Soap Developer",
    image: "/assets/Skills/R.png",
  },
  {
    id: 6,
    name: "Tailwindcss",
    designation: "The Explorer",
    image: "/assets/Skills/TW.png",
  },
  {
    id: 7,
    name: "Laravel",
    designation: "The Explorer",
    image: "/assets/Skills/l.png",
  },
];

const Skills = () => {
  return (
    <div className="flex justify-center flex-col w-full">
      <h2 className="h4s text-accent">Skills</h2>
      <div className="flex flex-row gap-10 items-center justify-center mb-10 w-full ">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default memo(Skills);
