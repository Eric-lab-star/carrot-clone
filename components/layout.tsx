import Link from "next/link";
import { cls } from "../libs/client/utils";
import { NextRouter, useRouter } from "next/router";
import VideoSVG from "./svg/video";
import UserSVG from "./svg/user";
import NewsSVG from "./svg/news";
import CommentSVG from "./svg/comment";
import HomeSVG from "./svg/home";

import React from "react";
import NavLink from "./navLink";

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();
  return (
    <div className="">
      <Header title={title} canGoBack={canGoBack} router={router} />
      <div className={cls("pt-10 relative", hasTabBar ? "pb-16" : "")}>
        {children}
      </div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 bg-amber-400 flex justify-center items-center w-full space-x-10 py-1">
          <Link href="/" passHref>
            <NavLink SVG={<HomeSVG />} text="Home" />
          </Link>
          <Link href="/chats" passHref>
            <NavLink SVG={<CommentSVG w="6" h="6" />} text="Chats" />
          </Link>
          <Link href="/community" passHref>
            <NavLink SVG={<NewsSVG />} text="News" />
          </Link>
          <Link href="/profile" passHref>
            <NavLink SVG={<UserSVG />} text="Profile" />
          </Link>
          <Link href="/stream" passHref>
            <NavLink SVG={<VideoSVG />} text="Live" />
          </Link>
        </nav>
      ) : null}
    </div>
  );
}

const Header = ({ canGoBack, router, title }: ITitleProps) => {
  return (
    <div
      className={cls(
        "w-full bg-amber-500 text-white flex fixed z-10 px-4 py-2 font-semibold text-lg shadow-lg",
        canGoBack ? "justify-start" : "justify-center"
      )}
    >
      {canGoBack ? (
        <a onClick={() => router.back()} className="cursor-pointer">
          &larr;
        </a>
      ) : null}
      {title ? <span className="flex-1 text-center">{title}</span> : null}
    </div>
  );
};
interface ITitleProps {
  canGoBack?: boolean;
  router: NextRouter;
  title?: string;
}
interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
  children: React.ReactNode;
}
