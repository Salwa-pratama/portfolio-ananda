import { memo } from "react";
import { HiOutlineMail, HiOutlineUser, HiOutlinedMa } from "react-icons/hi";

const Info = () => {
  return (
    <div className=" w-full">
      <div className="flex justify-between p-2">
        <div className="w-full">
          <h3 className="xl:text-[22px] text-sm  text-accent">Name : </h3>
          <p className="xl:text-sm text-[12px]">Ananda Salwa pratama</p>
        </div>
        <div className="w-full">
          <h3 className="xl:text-[22px] text-sm  text-accent">
            Date Of BirhtDay :{" "}
          </h3>
          <p className="xl:text-sm text-[12px]">03-December-2025</p>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="w-full">
          <h3 className="xl:text-[22px] text-sm  text-accent">Role : </h3>
          <p className="xl:text-sm text-[12px]">Full Stack / Front End Dev</p>
        </div>
        <div className="w-full">
          <h3 className="xl:text-[22px] text-accent">Location : </h3>
          <p className="xl:text-sm text-[12px]">Indonesia, East Java </p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default memo(Info);
