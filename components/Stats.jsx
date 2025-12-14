import { memo } from "react";
import CountUp from "react-countup";
import Link from "next/link";

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center  w-full  justify-left gap-8 xl:gap-19">
      {/* Stats 1 */}
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp
            start={0}
            end={2}
            duration={5}
            delay={2}
            className="block w-[60px] "
          />
          <div className="text-accent">+</div>
        </div>
        <span>
          Years <br />
          experiences
        </span>
      </div>
      {/* Stats 2 */}
      <div className="flex">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={0} duration={5} delay={2} className="block w-[60px] " />
        </div>
        <span>
          Total <br />
          Clients <br />
        </span>
      </div>
      <Link
        href={"/page/contact"}
        className="text-[10px] bg-accent p-2 text-center  hover:bg-accent-hover"
      >
        Be The Firts Client
      </Link>
    </div>
  );
};

export default memo(Stats);
