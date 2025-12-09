"use client";
// Module
import { MdArrowOutward, MdFileDownload } from "react-icons/md";
import { useState } from "react";

// Component
import Logo from "./Logo";
import Alert from "./ui/alert";
import NavLinks from "./NavLinks";
import packageJson from "../package.json";
import { downloadBlob } from "@/app/utils/downloadFile";

export default function MainNav() {
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
    <nav className="w-full py-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles={" flex flex-col gap-6"} />
        <div className="mb-0">
          <button
            onClick={handleDownloadCV}
            className="btn btn-lg btn-tertiary mb-0"
          >
            <div className="flex gap-3  items-center">
              <span>Download CV</span>
              {!isLoading ? (
                <MdFileDownload className="text-xl" />
              ) : (
                // simple spinner menggunakan css animate-spin
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
        <p className="text-white my-0 w-full text-right px-10">
          <span className="text-accent">v</span> {packageJson.version}
        </p>
      </div>
      {/* Alert Succes Download CV */}
      <Alert
        Text={alertText}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      />
    </nav>
  );
}
