import { memo } from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 right-0">
      <div className="container mx-auto ">
        <div>
          {/* Logo */}
          <Logo />
          {/* Nav Mobile */}
          
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
