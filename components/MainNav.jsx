import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { MdArrowOutward, MdFileDownload } from "react-icons/md";
import Socials from "./Socials";

export default function MainNav() {
  return (
    <nav className="w-full py-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles={" flex flex-col gap-6"} />
        <div>
          <button className="btn btn-lg btn-tertiary mb-16">
            <div className="flex gap-3  items-center">
              <span>Download CV</span>
              <MdFileDownload className="text-xl" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
