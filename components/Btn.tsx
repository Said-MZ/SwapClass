import Link from "next/link";
import React from "react";

const Btn = ({
  text,
  dark,
  isLink,
  href,
  size,
  onClick,
}: {
  text: string;
  dark: boolean;
  isLink: boolean;
  href: string | null;
  size: string;
  onClick?: () => void;
}) => {
  return isLink ? (
    <Link
      href={href || "/"}
      className={`${
        dark
          ? "bg-neutral-900 text-neutral-50  border-neutral-800"
          : "bg-neutral-50 text-neutral-900 border-neutral-200"
      }  font-semibold px-5 py-3 rounded-md hover:brightness-75 transition-all duration-200 border-[1px] ${size}`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${
        dark
          ? "bg-neutral-900 text-neutral-50  border-neutral-800"
          : "bg-neutral-50 text-neutral-900 border-neutral-200"
      }  font-semibold px-5 py-3 rounded-md hover:brightness-75 transition-all duration-200 border-[1px] ${size}`}
    >
      {text}
    </button>
  );
};

export default Btn;
