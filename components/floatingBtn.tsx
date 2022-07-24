import React from "react";

const FloatingBtn = React.forwardRef<HTMLAnchorElement, IFloatingBtn>(
  function floatingbtn({ href, onClick, SVG }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        className="fixed bottom-16 right-5 bg-amber-500 rounded-full text-white p-2 shadow-lg hover:bg-amber-600 transition-colors"
      >
        {SVG}
      </a>
    );
  }
);

export default FloatingBtn;

interface IFloatingBtn {
  href?: string;
  onClick?: () => void;
  SVG: React.ReactNode;
}
