"use client";

import { links } from "@/app/models/Links";
// Models
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLinks({ containerStyles }) {
  const pathname = usePathname();
  const cleanPath = pathname.replace("/page", "");

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        // Determine if the current link matches the active
        const isActive = cleanPath === link.path;
        console.log(pathname);

        // Calculate the number of characters in the link name
        const charLength = link.name.length;
        // Set th line with based on character length
        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";
        console.log(charLength);
        return (
          <Link
            href={link.name === "Home" ? "/" : `/page${link.path}`}
            key={index}
            className={`relative text-lg uppercase text-white
                ${
                  isActive &&
                  `after:content-[''] after:block after:absolute
                after:left-0 after:top-1/2 ${lineWidth} after:h-1 after:bg-accent after:-translate-y-1/2 after:z-0`
                }`}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
}
