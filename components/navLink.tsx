import { useRouter } from "next/router";
import React from "react";
import { cls } from "../libs/utils";
// eslint-disable-next-line react/display-name
const NavLink = React.forwardRef<any, any>(function NavLink(
  { onClick, href, SVG, text },
  ref
) {
  const router = useRouter();
  return (
    <a
      className={cls(
        "flex flex-col items-center justify-center text-xs text-white",
        router.pathname === `${href}` ? "text-amber-600" : ""
      )}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {SVG}
      <div>{text}</div>
    </a>
  );
});

interface INavProps {
  SVG: React.ReactNode;
  text?: string;
  href: string;
  onClick?: any;
}

export default NavLink;
