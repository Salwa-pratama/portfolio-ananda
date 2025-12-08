import { memo } from "react";
import { socialsLink } from "@/app/models/Links";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsLink.map((item, i) => {
        return (
          <div key={i} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Socials);
