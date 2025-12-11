import { memo } from "react";
import { HiOutlineMail, HiOutlineUser, HiOutlinedMa} from "react-icons/hi";

const Info = () => {
  return (
    <div className="bg-blue-100/50 w-full">
      <div className="flex justify-between p-2">
        <div className="w-full">
          <h3 className="h4 text-accent">Name : </h3>
          <p>Ananda Salwa pratama</p>
        </div>
        <div className="w-full">
          <h3 className="h4 text-accent">Date Of BirhtDay : </h3>
          <p>03-December-2025</p>
        </div>
      </div>
      <div className="flex justify-between p-2">
        <div className="w-full">
          <h3 className="h4 text-accent">Role : </h3>
          <p>Full Stack / Front End Dev</p>
        </div>
        <div className="w-full">
          <h3 className="h4 text-accent">Location : </h3>
          <p>Indonesia, East Java </p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default memo(Info);
