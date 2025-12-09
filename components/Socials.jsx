import { memo } from "react";
import { socialsLink } from "@/app/models/Links";
import Link from "next/link";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsLink.map((item, i) => {
        return (
          <Link
            href={item.path}
            key={i}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default memo(Socials);
