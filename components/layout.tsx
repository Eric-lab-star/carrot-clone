import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  hasTabBar?: boolean;
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className=" w-full bg-amber-500 text-white justify-center flex fixed py-2 font-semibold text-lg shadow-lg">
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("py-10", hasTabBar ? "pb-17" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 bg-amber-400 flex justify-center items-center w-full -z-1">
          hello
        </nav>
      ) : null}
    </div>
  );
}
