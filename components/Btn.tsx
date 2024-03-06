import Link from "next/link";
import React from "react";

const Btn = ({
  text,
  dark,
  isLink,
  href,
  style,
  onClick,
}: {
  text: string;
  dark: boolean;
  isLink: boolean;
  href: string | null;
  style: string;
  onClick?: () => void;
}) => {
  const styles = `${
    dark
      ? "bg-neutral-900 text-neutral-50  border-neutral-800"
      : "bg-neutral-50 text-neutral-900 border-neutral-200"
  }  font-semibold px-5 py-3 rounded-md hover:brightness-75 transition-all duration-200 border-[1px] text-center text-nowrap ${style}`;
  return isLink ? (
    <Link href={href || "/"} className={styles}>
      {text}
    </Link>
  ) : (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
};

export default Btn;
