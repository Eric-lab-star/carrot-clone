import { useRouter } from "next/router";
import React from "react";
import { cls } from "../libs/client/utils";
const NavLink = React.forwardRef<HTMLAnchorElement, INavProps>(function NavLink(
  { onClick, href, SVG, text },
  ref
) {
  const router = useRouter();
  return (
    <a
      className={cls(
        "flex flex-col items-center justify-center text-xs ",
        router.pathname === href ? "text-amber-600" : "text-white"
      )}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {SVG}
      <span>{text}</span>
    </a>
  );
});

interface INavProps {
  SVG: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: any;
}

export default NavLink;
