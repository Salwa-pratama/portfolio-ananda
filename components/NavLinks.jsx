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
        const isActive = cleanPath === link.path;

        return (
          <Link
            href={link.name === "Home" ? "/" : `/page${link.path}`}
            key={index}
            className="
              relative px-2 py-1 text-lg uppercase text-white
              transition-colors duration-300
              after:absolute after:inset-0 after:rounded-md
              after:bg-accent-hover after:origin-left
              after:scale-x-0 after:opacity-0
              after:transition-transform after:duration-300

            "
          >
            <span
              className={`relative z-10 ${isActive ? "font-semibold" : ""}`}
            >
              {link.name}
            </span>

            {isActive && (
              <span className="absolute inset-0 rounded-md bg-accent-hover -z-0" />
            )}
          </Link>
        );
      })}
    </ul>
  );
}

// after:content-[''] after:block after:absolute
//                 after:left-0 after:top-1/2 ${lineWidth} after:h-1 after:bg-accent after:-translate-y-1/2 after:z-0
