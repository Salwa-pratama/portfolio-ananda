"use client"
import { Children, memo, useState } from "react";
// components
import Logo from "./Logo";
import Socials from "./Socials";
import { CiMenuFries } from "react-icons/ci";
import { MdArrowOutward, MdFileDownload } from "react-icons/md";
import NavLinks from "./NavLinks";
import Alert from "./ui/alert";
import { downloadBlob } from "@/app/utils/downloadFile";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertText, setAlertText] = useState("Download Successfully!");

  const handleDownloadCV = async () => {
    try {
      setIsLoading(true);
      // Path ke file di public
      const fileUrl = "/assets/cv.pdf";
      // Fetch file sebagai blob
      const res = await fetch(fileUrl, {});
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const blob = await res.blob();

      const cd = res.headers.get("content-description");
      let filename = "cv.pdf";
      if (cd) {
        const match = cd.match(/filename\*?=(?:UTF-8'')?["']?([^;"']+)/);
        if (match && match[1]) filename = decodeURIComponent(match[1]);
      }
      setTimeout(() => setIsLoading(false), 1000);

      // download
      downloadBlob(blob, filename);

      // show success alert
      setAlertText("Download berhasil!");
      setShowAlert(true);
    } catch (err) {
      console.error("Download CV error:", err);
      setAlertText("Download gagal. Coba lagi.");
      setShowAlert(true);
    } finally {
      // tunggu sebentar supaya user lihat animasi selesai
      setTimeout(() => setIsLoading(false), 1000);
    }
  };
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Logo />
          {/* Nav Mobile */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles={"flex flex-col gap-8 max-w-[100px]"} />
              <div>
                <button
                  onClick={handleDownloadCV}
                  className="btn btn-lg btn-tertiary mb-16"
                >
                  <div className="flex gap-3  items-center">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl" />
                  </div>
                </button>
                <Socials
                  containerStyles={"flex gap-4 "}
                  iconStyles={
                    "bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
        {/* Alert Succes Download Cv */}
        <Alert
          Text={alertText}
          show={showAlert}
          onClose={() => setShowAlert(false)}
        />
      </div>
    </header>
  );
};

export default memo(Header);
