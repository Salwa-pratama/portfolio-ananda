import { memo } from "react";
import { TypeAnimation } from "react-type-animation";
const Maintenance = () => {
  return (
    <div className="h-screen items-center justify-center  flex  ">
      <div>
        <h2 className="h4 ">
          <TypeAnimation
            sequence={[
              "Masih Tahap Pengembangan....",
              2000,
              "Sabar Dulu ya....",
              2000,
              "Orang Sabar Disayang Tuhan....",
              2000,
              "Btw Kalian ....",
              2000,
              "Nungguin...?",
              2000,
              "Ngg kan",
              2000,
              "Ngg Yaudah ",
              2000,
              "Hehehehe :)",
              2000,
            ]}
            wrapper="span"
            speed={40}
            className="text-white"
            repeat={Infinity}
            cursor={false}
          />
        </h2>
      </div>
    </div>
  );
};

export default memo(Maintenance);
