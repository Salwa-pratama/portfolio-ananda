import { memo } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import avatarImg from "@/public/assets/Skills/m.png";

const people = [
  {
    id: 1,
    name: "Express",
    designation: "Software Engineer",
    image: "/assets/Skills/e.png",
    borderVia: "via-yellow-400",
    persentation: "40%",
    persentationColor: "bg-yellow-400",
    border: "border-yellow-400",
  },
  {
    id: 2,
    name: "Mongo DB",
    designation: "Product Manager",
    image: "/assets/Skills/m.png",
    borderVia: "via-green-400",
    persentation: "25%",
    persentationColor: "bg-green-400",
    border: "border-green-400",
  },
  {
    id: 3,
    name: "NextJS",
    designation: "Data Scientist",
    image: "/assets/Skills/next.png",
    borderVia: "via-white",
    persentation: "20%",
    persentationColor: "bg-white",
    border: "border-white",
  },
  {
    id: 4,
    name: "Python",
    designation: "UX Designer",
    image: "/assets/Skills/p.png",
    borderVia: "via-yellow-400",
    persentation: "70%",
    persentationColor: "bg-yellow-400",
    border: "border-yellow-400",
  },
  {
    id: 5,
    name: "React",
    designation: "Soap Developer",
    image: "/assets/Skills/R.png",
    borderVia: "via-blue-300",
    persentation: "60%",
    persentationColor: "bg-blue-300",
    border: "border-blue-400",
  },
  {
    id: 6,
    name: "Tailwindcss",
    designation: "The Explorer",
    image: "/assets/Skills/TW.png",
    borderVia: "via-blue-300",
    persentation: "50%",
    persentationColor: "bg-blue-300",
    border: "border-blue-400",
  },
  {
    id: 7,
    name: "Laravel",
    designation: "The Explorer",
    image: "/assets/Skills/l.png",
    borderVia: "via-red-500",
    persentation: "10%",
    persentationColor: "bg-red-500",
    border: "border-red-400",
  },
];

const Skills = () => {
  return (
    <div className="flex justify-center flex-col w-full ">
      <h2 className="text-xl  mb-10 text-white border-b border-accent  px-2 text-center ">
        SKILLS
      </h2>
      <div className="flex flex-row gap-5  mb-10 w-full justify-center">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default memo(Skills);
